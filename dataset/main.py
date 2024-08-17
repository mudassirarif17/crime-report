import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
from statsmodels.tsa.arima.model import ARIMA
import pickle
# Load each sheet into a separate DataFrame
sheets = ['EAST', 'WEST', 'SOUTH', 'CENTRAL']
df_list = []

for sheet in sheets:
    df = pd.read_excel('CRIME_REPORT_2019_SAMPLE.xlsx', sheet_name=sheet)
    df_transposed = df.transpose().reset_index()
    df_transposed.columns = df_transposed.iloc[0]
    df_transposed = df_transposed.drop(0)
    df_transposed = df_transposed.rename(columns={df_transposed.columns[0]: 'TIMELINE'})
    df_transposed = df_transposed.reset_index(drop=True)
    df_melted = df_transposed.melt(id_vars=['TIMELINE'], var_name='Crime', value_name='Occurrences')
    df_melted['Region'] = sheet
    df_list.append(df_melted)

df_combined = pd.concat(df_list, ignore_index=True)

# Convert TIMELINE to datetime format
df_combined['TIMELINE'] = pd.to_datetime(df_combined['TIMELINE'], format='%Y%m', errors='coerce')
df_combined = df_combined.dropna(subset=['TIMELINE'])
df_combined['Occurrences'] = pd.to_numeric(df_combined['Occurrences'], errors='coerce').fillna(0)
df_combined.reset_index(drop=True, inplace=True)

# Pivot the data for machine learning
df_ml = df_combined.pivot_table(index='TIMELINE', columns='Crime', values='Occurrences', aggfunc=np.sum).fillna(0)
df_ml = df_ml.reset_index()

# Feature engineering
df_ml['Year'] = df_ml['TIMELINE'].dt.year
df_ml['Month'] = df_ml['TIMELINE'].dt.month
X = df_ml[['Year', 'Month']]

# Machine Learning: Random Forest to classify and predict crimes
for crime in df_ml.columns[1:-2]:
    y = df_ml[crime]
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    y_pred = model.predict(X_test)
    
    print(f"Classification Report for {crime}:\n", classification_report(y_test, y_pred))
    print(f"Confusion Matrix for {crime}:\n", confusion_matrix(y_test, y_pred))

# Time Series Analysis: ARIMA for predicting future crimes
crime_forecasts = {}
for crime in df_ml.columns[1:-2]:
    model = ARIMA(df_ml[crime], order=(1,1,1))
    model_fit = model.fit()
    forecast = model_fit.forecast(steps=12)
    crime_forecasts[crime] = forecast
    print(f"Forecast for {crime}:\n", forecast)
with open('model.pkl', 'wb') as model_file:
    pickle.dump(model, model_file)
# Safety measures based on crime prediction
def suggest_safety_measures(crime_type, forecast):
    if crime_type in ['MURDER', 'MURDER IN FORM OF TARGETED KILLING']:
        return "Increase police patrols, enhance neighborhood watch programs, and implement curfews if necessary."
    elif crime_type in ['CAR SNATCHING', 'HIGHWAY DACOITY/ROBBERY']:
        return "Install more CCTV cameras, improve street lighting, and promote vehicle tracking devices."
    elif crime_type in ['GANG RAPE']:
        return "Increase public awareness, promote safe zones, and enhance emergency response systems."
    else:
        return "Promote general safety measures, community involvement, and enhance emergency services."

# Display safety measures based on forecasts
for crime, forecast in crime_forecasts.items():
    safety_measures = suggest_safety_measures(crime, forecast)
    print(f"Safety Measures for {crime}:\n{safety_measures}\n")
