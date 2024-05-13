import requests
import json

# グローバル定数
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
API_KEY = "7fff74dea4746c53a552bdf858183d69"  # あなたのAPIキーをここに入力してください

def get_weather_data(city):
    params = {
        "q": city,
        "appid": API_KEY
    }
    response = requests.get(BASE_URL, params=params)
    return response

def main():
    city = input("Please enter a city (default is Tokyo): ") or "Tokyo"
    response = get_weather_data(city)
    if response.status_code == 200:
        data = response.json()
        print(json.dumps(data, indent=4))  # JSONデータを整形して出力
    else:
        print(f"Error occurred: {response.status_code}")

if __name__ == "__main__":
    main()