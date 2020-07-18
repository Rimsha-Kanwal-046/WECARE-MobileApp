import json
import pickle
import requests
import os
import sys
import numpy as np
import pandas as pd
csvname = os.path.join(os.getcwd(), 'python\Training.csv')
df = pd.read_csv(csvname)

nn = df.drop(['prognosis'], axis=1)
l1 = nn.columns
disease = ['Fungal infection', 'Allergy', 'GERD', 'Chronic cholestasis', 'Drug Reaction',
           'Peptic ulcer diseae', 'AIDS', 'Diabetes', 'Gastroenteritis', 'Bronchial Asthma', 'Hypertension',
           ' Migraine', 'Cervical spondylosis',
           'Paralysis (brain hemorrhage)', 'Jaundice', 'Malaria', 'Chicken pox', 'Dengue', 'Typhoid', 'hepatitis A',
           'Hepatitis B', 'Hepatitis C', 'Hepatitis D', 'Hepatitis E', 'Alcoholic hepatitis', 'Tuberculosis',
           'Common Cold', 'Pneumonia', 'Dimorphic hemmorhoids(piles)',
           'Heartattack', 'Varicoseveins', 'Hypothyroidism', 'Hyperthyroidism', 'Hypoglycemia', 'Osteoarthristis',
           'Arthritis', '(vertigo) Paroymsal  Positional Vertigo', 'Acne', 'Urinary tract infection', 'Psoriasis',
           'Impetigo']
ss1 = sys.argv[1]
l2 = []
for x in range(0, len(l1)):
    l2.append(0)

filename = os.path.join(os.getcwd(), 'python\disease_model.sav')


psymptoms = ss1.split(',')
for k in range(0, len(l1)):
    for z in psymptoms:
        if (z == l1[k]):
            l2[k] = 1


inputtest = [l2]

load_lr_model = pickle.load(open(filename, 'rb'))
predict = load_lr_model.predict(inputtest)

predicted = predict[0]
probability = load_lr_model.predict_proba(inputtest)
first = 0
second = 0
third = 0
for i in range(0, len(probability[0])):
    current = probability[0][i]
    if(first < current):
        third = second
        second = first
        first = current
    elif(second < current):
        third = second
        second = current
    elif(third < current):
        third = current
result1 = np.where(probability[0] == first)
result2 = np.where(probability[0] == second)
result3 = np.where(probability[0] == third)

print(disease[result1[0][0]])
print(disease[result2[0][0]])
print(disease[result3[0][0]])
print(disease[result1[0][0]])
print(first*100)
print(disease[result1[0][0]])

print(int(first*100))
print(int(second*100))
print(int(third*100))
