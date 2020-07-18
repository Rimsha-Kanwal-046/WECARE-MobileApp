from datetime import datetime, timedelta
import json
import pickle
import requests
import os
import sys
now = datetime.now()

name = 'islamabad'
if(len(sys.argv) > 1):
    name = sys.argv[1]
# else:
#     name = 'islamabad'
key = 'c322c0a6a2854d39a1165623201307'
filename = os.path.join(os.getcwd(), 'python\Regressor_model.sav')
load_lr_model = pickle.load(open(filename, 'rb'))


def call(location, date, enddate):
    url = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key='+key
    final_url = url+"&q="+location+"&format=json&date=" + \
        date+"&enddate="+enddate+"&tp=24"
    results = requests.get(final_url)
    return results.text


maxtemp = []
mintemp = []
avgtemp = []
labels = []
N = 10

date_N_days_ago = datetime.now() - timedelta(days=N)
date_N_days_ahead = datetime.now() + timedelta(days=N)
# for past weather
pm25 = []
load_lr_model = pickle.load(open(filename, 'rb'))

current = datetime.now().date().strftime("%Y-%m-%d")
past = date_N_days_ago.date().strftime("%Y-%m-%d")
future = date_N_days_ahead.date().strftime("%Y-%m-%d")
data = call(name, past, current)
json_parsed = json.loads(data)
for x in json_parsed['data']['weather']:
    maxtemp.append(x['maxtempC'])
    mintemp.append(x['mintempC'])
    avgtemp.append(x['avgtempC'])
    labels.append(x['date'])

    for y in x['hourly']:
        x = [[y['tempC'], y['windspeedKmph'], y['winddirDegree'], y['DewPointC']]]
        extratree_pred = load_lr_model.predict(x)
        pm25.append(extratree_pred[0])
print(maxtemp)
print(labels)
print(mintemp)
print(avgtemp)
# for past PM 2.5


maxtemp = []
mintemp = []
avgtemp = []
labels = []


def call1(location, noDays, gap):
    url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key='+key
    final_url = url+"&q="+location+"&format=json&num_of_days="+noDays+"&tp="+gap
    results = requests.get(final_url)
    return results.text


data = call1(name, '10', '24')
json_parsed = json.loads(data)
for x in json_parsed['data']['weather']:
    maxtemp.append(x['maxtempC'])
    mintemp.append(x['mintempC'])
    avgtemp.append(x['avgtempC'])

    labels.append(x['date'])
print(maxtemp)
print(labels)
print(mintemp)
print(avgtemp)

print(pm25)


def choiceCall(location, noDays, gap):
    url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key='+key
    final_url = url+"&q="+location+"&format=json&num_of_days="+noDays+"&tp="+gap
    results = requests.get(final_url)
    return results.text


if(len(sys.argv) > 1):
    hour = str(now.hour)+'00'

    data = choiceCall(name, '1', '1')
    json_parsed = json.loads(data)
    imglink = json_parsed['data']['current_condition'][0]['weatherIconUrl'][0]['value']
    temp = json_parsed['data']['current_condition'][0]['temp_C']
    description = json_parsed['data']['current_condition'][0]['weatherDesc'][0]['value']
    humidity = json_parsed['data']['current_condition'][0]['humidity']
    windspeed = json_parsed['data']['current_condition'][0]['windspeedKmph']
    print(imglink)
    print(temp)
    print(description)
    print(humidity)
    print(windspeed)
    winddir = json_parsed['data']['current_condition'][0]['winddirDegree']
    dewpoint = 0
    json_parsed_map = json.loads(data)
    check = "false"
    for x in json_parsed_map['data']['weather']:
        for y in x['hourly']:
            if(y['time'] == hour):
                check = "true"
                dewpoint = y['DewPointC']
    preinput = [[temp, windspeed, winddir, dewpoint]]

    predmap = load_lr_model.predict(preinput)
    print(predmap[0])
