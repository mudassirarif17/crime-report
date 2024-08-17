import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import statsmodels.api as sm
from sklearn.metrics import classification_report, confusion_matrix

# Load and transpose data from predefined sheets
@st.cache_data
def load_and_preprocess_data(sheet_name):
    df = pd.read_excel("CRIME_REPORT_2019_SAMPLE.xlsx", sheet_name=sheet_name)
    df = df.transpose()
    df.columns = df.iloc[0]
    df = df.drop(df.index[0])
    df = df.reset_index()
    df = df.rename(columns={"index": "TIMELINE"})
    df["TIMELINE"] = pd.to_datetime(df["TIMELINE"], format="%Y%m")
    return df

# Model and prediction function
def make_predictions(data):
    predictions = {}
    for column in data.columns[1:]:
        series = data[column].astype(float)
        if series.std() == 0 or series.nunique() == 1:
            st.warning(f"Series for {column} is constant or has insufficient variation.")
            continue
        
        model = sm.tsa.ARIMA(series, order=(5,1,0))
        model_fit = model.fit()
        forecast = model_fit.forecast(steps=12)
        predictions[column] = forecast
    
    return predictions

# Safety measures for specific crimes
def get_safety_measures(crime_type):
    measures = {
        "MURDER": "Avoid isolated areas, stay alert, and report any suspicious activities to authorities.",
        "MURDER IN FORM OF TARGETED KILLING": "Be aware of your surroundings and avoid sharing personal information.",
        "MURDER DURING ROBBERY": "Cooperate with robbers and avoid resistance to minimize harm.",
        "SUICIDE BOMBING/ BOMB BLAST": "Stay vigilant in crowded places and report unattended packages.",
        "HIGHWAY DACOITY/ROBBERY": "Avoid traveling alone at night and use secure routes.",
        "BANK ROBBERY": "Avoid carrying large amounts of cash and use online banking when possible.",
        "CAR SNATCHING": "Park in well-lit areas and avoid leaving valuables visible in the car.",
        "GANG RAPE": "Avoid walking alone at night and use trusted transportation methods."
    }
    return measures.get(crime_type, "Stay safe and follow general safety guidelines.")

# Streamlit app
st.title("Crime Prediction and Safety Measures")

# Region selection
region = st.selectbox("Select a Region", ["EAST", "WEST", "SOUTH", "CENTRAL"])

# Load data for the selected region
data = load_and_preprocess_data(region)

# Make predictions
forecasts = make_predictions(data)

# Display predictions and safety measures
if forecasts:
    max_crime = max(forecasts, key=lambda k: forecasts[k].iloc[-1])
    st.subheader(f"Most Likely Crime: {max_crime}")
    
    # Plot prediction
    plt.figure(figsize=(10, 6))
    plt.plot(data["TIMELINE"], data[max_crime], label="Historical Data")
    plt.plot(pd.date_range(start=data["TIMELINE"].iloc[-1], periods=12, freq='M'), forecasts[max_crime], label="Forecast", linestyle='--')
    plt.xlabel("Timeline")
    plt.ylabel("Number of Incidents")
    plt.title(f"Prediction for {max_crime} in {region}")
    plt.legend()
    st.pyplot(plt)

    # Show safety measures
    st.subheader("Safety Measures")
    st.write(get_safety_measures(max_crime))
else:
    st.write("Insufficient data for predictions.")

