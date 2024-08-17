from flask import Flask, jsonify, request
import pandas as pd

app = Flask(__name__)

def read_excel_file():
    excel_file_path = 'n1.xlsx' 
    df = pd.read_excel(excel_file_path)
    
    columns = ['District', 'Year', 'Month', 'MURDER', 'MURDER IN FORM OF TARGETED KILLING', 
               'MURDER DURING ROBBERY', 'SUCIDE BOMBING/ BOMB BLAST', 'HIGH WAY DACOITY/ROBBERY', 
               'BANK ROBBERY', 'CAR SNATCHING', 'GANG RAPE']
    
    data = df[columns]
    return data

@app.route('/get_district/<district>', methods=['GET'])
def get_district(district):
    data = read_excel_file()

    if district == 'all':
        data_dict = data.to_dict(orient='records')
        return jsonify(data_dict)


    district_data = data[data['District'].str.lower() == district.lower()]

    district_data_dict = district_data.to_dict(orient='records')
    return jsonify(district_data_dict)

if __name__ == '__main__':
    app.run(port=8080)  # Change the port to 8080
    app.run(debug=True)
