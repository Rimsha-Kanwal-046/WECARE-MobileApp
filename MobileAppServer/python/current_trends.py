import datetime
import json
import pickle
import requests
import os
import sys
import time
key = 'c322c0a6a2854d39a1165623201307'

filename = os.path.join(os.getcwd(), 'python\Regressor_model.sav')
load_lr_model = pickle.load(open(filename, 'rb'))
now = datetime.datetime.now()
hour = str(now.hour)+'00'
allTemp = []
allPm25 = []
nametemp = []
namepm25 = []


def call(location, noDays, gap):
    url = 'http://api.worldweatheronline.com/premium/v1/weather.ashx?key='+key
    final_url = url+"&q="+location+"&format=json&num_of_days="+noDays+"&tp="+gap

    results = ''
    while results == '':
        try:
            results = requests.get(final_url)
            break
        except:
            time.sleep(5)
            continue
    # results = requests.get(final_url)

    return results.text


# Islamabad
data = call('Islamabad', '1', '1')
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

allTemp.append(int(temp))
nametemp.append(json_parsed['data']['request'][0]['query'])


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
allPm25.append(float(predmap[0]))
# Lahore
data = call('Lahore', '1', '1')
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
allTemp.append(int(temp))
nametemp.append(json_parsed['data']['request'][0]['query'])

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
allPm25.append(float(predmap[0]))

# Karachi
data = call('Karachi', '1', '1')
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
allTemp.append(int(temp))
nametemp.append(json_parsed['data']['request'][0]['query'])

predmap = load_lr_model.predict(preinput)
print(predmap[0])
allPm25.append(float(predmap[0]))

# Peshawar
data = call('Peshawar', '1', '1')
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
allTemp.append(int(temp))
nametemp.append(json_parsed['data']['request'][0]['query'])

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
allPm25.append(float(predmap[0]))

# Gilgit
data = call('Gilgit', '1', '1')
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
allTemp.append(int(temp))
nametemp.append(json_parsed['data']['request'][0]['query'])

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
allPm25.append(float(predmap[0]))

# Quetta
data = call('Quetta', '1', '1')
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
allTemp.append(int(temp))
nametemp.append(json_parsed['data']['request'][0]['query'])

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
allPm25.append(float(predmap[0]))


# sorting temperature array and names
length = len(allTemp)
j = 0

while j < length-1:
    if (allTemp[j] > allTemp[j + 1]):
        temp = allTemp[j]
        allTemp[j] = allTemp[j + 1]
        allTemp[j + 1] = temp
        temp2 = nametemp[j]
        nametemp[j] = nametemp[j + 1]
        nametemp[j + 1] = temp2
        j = -1
    j += 1

print(nametemp)
print(allTemp)


# sorting pm2.5 array and names
length = len(allPm25)
j = 0

while j < length-1:
    if (allPm25[j] > allPm25[j + 1]):
        temp = allPm25[j]
        allPm25[j] = allPm25[j + 1]
        allPm25[j + 1] = temp
        temp2 = nametemp[j]
        nametemp[j] = nametemp[j + 1]
        nametemp[j + 1] = temp2
        j = -1
    j += 1

print(nametemp)
print(allPm25)
