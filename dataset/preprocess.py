from sklearn.preprocessing import StandardScaler, LabelEncoder

# Example preprocessing function
def preprocess_data(data):
    # Initialize the label encoder and scaler (use the same ones you used for training)
    label_encoders = {}
    scaler = StandardScaler()
    
    # Drop any columns that are not needed for prediction
    # Example: drop columns that are not part of features used for training
    data = data.drop(columns=['SomeIrrelevantColumn'])

    # Handle missing values
    # Example: fill missing values with the median for numerical columns
    for column in data.select_dtypes(include=['float64', 'int64']).columns:
        data[column].fillna(data[column].median(), inplace=True)

    # Convert categorical variables to numerical values using label encoding
    # Assuming 'CategoryColumn' is a categorical feature used in training
    categorical_columns = ['CategoryColumn']
    for column in categorical_columns:
        if column not in label_encoders:
            label_encoders[column] = LabelEncoder()
            # Fit label encoder on the column (do this only during training, so adjust accordingly)
            data[column] = label_encoders[column].fit_transform(data[column])
        else:
            data[column] = label_encoders[column].transform(data[column])
    
    # Scale numerical features
    # Example: scale numerical features using the same scaler used during training
    numerical_columns = ['NumericFeature1', 'NumericFeature2']
    data[numerical_columns] = scaler.fit_transform(data[numerical_columns])

    # Ensure the data has the same features as the training data
    # Example: reorder columns if needed, or fill missing columns with default values
    expected_columns = ['Feature1', 'Feature2', 'Feature3']  # List of features used in training
    for column in expected_columns:
        if column not in data.columns:
            data[column] = 0  # or use np.nan, or some default value
    data = data[expected_columns]

    return data
