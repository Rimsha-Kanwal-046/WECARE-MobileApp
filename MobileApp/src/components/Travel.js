import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage,
  Button,
  Picker,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';
import moment from 'moment';

import PureChart from 'react-native-pure-chart';
import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-datepicker';

import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {floor} from 'mathjs';
import {ceil} from 'mathjs';
import {abs} from 'mathjs';

const instructions = [
  {
    startpm: '0',
    endpm: '12',
    status: 'Good',
    type: 'Normal',
    effect: 'Air quality is very good. There are no health risks. ',
    precautions: 'Air quality is very good. There are no health risks.',
    travelSuggestion:
      'You can travel freely. The pollution level is good and safe',
  },
  {
    startpm: '0',
    endpm: '12',
    status: 'Good',
    type: 'Other',
    effect: 'Air quality is very good. There are no health risks',
    precautions: 'Air quality is very good. There are no health risks',
    travelSuggestion:
      'You can travel freely. The pollution level is good and safe',
  },
  {
    startpm: '13',
    endpm: '35',
    status: 'Moderate',
    type: 'Normal',
    effect: 'There are no health risks for you.',
    precautions: 'No precautionary measures needed.',
    travelSuggestion:
      'You can travel freely. This pollution level is safe for you.',
  },
  {
    startpm: '13',
    endpm: '35',
    status: 'Moderate',
    type: 'Other',
    effect:
      'Air quality is satisfactory but there may be moderate health concerns for you. You may experience slight respiratory symptoms but chances are less.',
    precautions:
      'To avoid any risk avoid heavy or prolong exertions.  Reduce the time of activity that include heavy exertions. Or replace the activity with any other one.',
    travelSuggestion:
      'You can continue with any outdoor plans or travelling. The city pollution level is moderate today.',
  },
  {
    startpm: '36',
    endpm: '55',
    status: 'Unhealthy for sensitive groups',
    type: 'Normal',
    effect: 'You may begin to feel a little discomfort in breathing.',
    precautions:
      'If you experience any symptoms then limit your outdoor activities. Otherwise this pollution level is not alarm for you.',
    travelSuggestion:
      'You can continue with any outdoor plans or travelling. The city pollution level is good for you.',
  },
  {
    startpm: '36',
    endpm: '55',
    status: 'Unhealthy for sensitive groups',
    type: 'Other',
    effect:
      'There is an increase in likelihood of respiratory symptoms and premature mortality to some extent. Long term exposure can aggravate your disease and may lead to heart attack.',
    precautions:
      'Limit prolong exertion. Reduce activity time or substitute another activity that involves less exertion. For example go for a walk instead of jog.',
    travelSuggestion:
      'Try not to travel if it’s not urgent.But in the other case it’s not very dangerous if you choose to move. Just take care and follow the precautions.',
  },
  {
    startpm: '56',
    endpm: '150',
    status: 'Unhealthy',
    type: 'Normal',
    effect:
      'You can experience significant increase in respiratory affects. Long term exposures can lead to heart attacks and arrhythmias.',
    precautions:
      'Avoid or limit prolonged exertions. Reduce activity time or substitute another activity that involves less exertion. For example go for a walk instead of jog. Do not exercise near busy roads. Don’t smoke. Use of vacuum cleaner can help reduce particle level inside house.',
    travelSuggestion:
      'Try not to travel if it’s not urgent.But in the other case it’s not very dangerous if you choose to move. Just take care and follow the precautions.',
  },
  {
    startpm: '56',
    endpm: '150',
    status: 'Unhealthy',
    type: 'Other',
    effect:
      'you can experience serious health effects. Increase aggravation of heart or lung disease. Long term exposures can lead to heart attacks.',
    precautions:
      'Don’t do activities that include heavy exertions. Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves.',
    travelSuggestion:
      'You should cancel your outdoor plans. But if they are urgent try to limit the time. And wear masks while going outside. If you are not the resident of this city and planning to travel to here consider re planning your trip.',
  },
  {
    startpm: '151',
    endpm: '250',
    status: 'Very Unhealthy',
    type: 'Normal',
    effect:
      'You can have difficulty in breathing. And may experience serious respiratory symptoms. Long term exposures can lead to heart attacks',
    precautions:
      'Don’t do activities that include heavy exertions. Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves.Wear masks when going outside.',
    travelSuggestion:
      'You should cancel your outdoor plans. But of they are urgent try to limit the time. And wear masks while going outside. If you are not the resident of this city and planning to travel to here consider re planning your trip.',
  },
  {
    startpm: '151',
    endpm: '250',
    status: 'Very Unhealthy',
    type: 'Other',
    effect:
      'you can experience serious health effects. Increase aggravation of heart or lung disease. Short term exposures can lead to heart attacks and other life threatening issues. Risks of premature mortality increases to a significant level.',
    precautions:
      'As the pollution level is not safe at all you should not do any activity that include heavy exertions. . Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves. Room air cleaner can help reduce particle level inside house.',
    travelSuggestion:
      'You should not travel and risk your life. The pollution level is not safe at all today. Stay Inside.',
  },
  {
    startpm: '251',
    endpm: '500',
    status: 'Hazardous',
    type: 'Normal',
    effect:
      'This pollution level is very bad and hazardous for health. Even though you are not pollution sensitive but precautionary actions are must. You can experience serious health effects. Short term exposures can lead to heart attacks and arrhythmias.',
    precautions:
      'As the pollution level is not safe at all you should not do any activity that include heavy exertions. . Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves. Room air cleaner can help reduce particle level inside house',
    travelSuggestion:
      'You should not travel and risk your life. The pollution level is not safe at all today. Stay Inside.',
  },
  {
    startpm: '251',
    endpm: '500',
    status: 'Hazardous',
    type: 'Other',
    effect:
      'Pollution level is very hazardous. Serious risks of heart attacks and premature mortality in case of short term exposures. Serious aggravation of heart and lungs disease. Even a very short term exposure can cause a life threatening issue.',
    precautions:
      'the pollution level is not safe at all you should not do any activity that include heavy exertions. . Take several precautionary actions like do not exercise near busy roads. Don’t smoke. Lessen the use of candles and wood burning stoves. Room air cleaner can help reduce particle level inside house.',
    travelSuggestion:
      'You should not travel at any cost and risk your life. The pollution level is not safe at all today. Stay Inside. ',
  },
];
const currentdate = new Date();
const maxdate = moment()
  .toDate()
  .setDate(currentdate.getDate() + 13); //set new date 7 days from now(the correct 7 days)// Teach Autosuggest how to calculate suggestions for any given input value.

export default class Travel extends Component {
  constructor(props) {
    super();
    this.state = {
      // cityvalue: '',
      // diseasevalue: '',
      // days: null,
      // date: '',
      // enddate: '',
      isVisible: false,

      data: [
        {day: 1, effect: 'moderate', precautions: 'no'},
        {day: 2, effect: 'low', precautions: 'yes'},
        {day: 3, effect: 'low', precautions: 'no'},
        {day: 4, effect: 'low', precautions: 'no'},
      ],

      ///copied from web interface
      hour: '',
      startDate: new Date(),
      endDate: new Date(),
      disease: 'heart disease',
      show_button: true,
      mydata: null,
      chart: null,
      dayDifference: '',
      endingDay: '',
      recommendation: null,
      firstDateDiffer: '',
      //for auto suggest
      value: '',
      suggestions: [],
      all_suggestions: [],
      daily_suggestion: [],
      hour2: '',
      //set new date 7 days from now(the correct 7 days)// Teach Autosuggest how to calculate suggestions for any given input value.
    };
  }
  setcity = val => {
    this.setState({
      value: val,
      lastDate,
    });
  };
  setdisease = val => {
    this.setState({
      // diseasevalue: val,
      disease: val,
      firstDateDiffer: this.state.startDate.getTime(),
    });
  };

  cityclicked = () => {
    var data = this.state.value;
    if (data == '') {
      alert('please select an option');
    } else {
      alert(this.state.value);
    }
  };
  diseaseclicked = () => {
    var data = this.state.disease;
    if (data == '') {
      alert('please select an option');
    } else {
      alert(this.state.disease);
    }
  };
  submit = () => {
    // if (this.state.endingDay < 1) {
    //   alert('Please enter correct dates');
    // }
    fetch('http://192.168.43.64:1000/api/pollution', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        city: this.state.value,
        // days: this.state.days,
        disease: this.state.disease,
        // dayDifference: this.state.dayDifference,
        dayDifference: this.state.dayDifference,
        endingDay: this.state.endingDay,
        hour2: this.state.hour2,
      }),
    })
      .then(async data => {
        var alldata = await this.callBackendAPI();
        // console.log(alldata.express[1]);

        ///////////pm25 of graph///////
        var pm25val = alldata.express[1];
        var withoutEnds = pm25val.toString().substring('0', pm25val.length - 1);
        var pm25splitted = withoutEnds.split(',');
        var finalArrayPM25 = [];
        pm25splitted.forEach(function(value) {
          finalArrayPM25.push(
            value.toString().substring('8', value.length - 2),
          );
        });
        /////////////////////fo displaying on mobile//////
        var chunk = this.chunkArray(finalArrayPM25, 24);
        // console.log(chunk);
        var cardpm25 = [];
        for (let i = 0; i < chunk.length; i++) {
          let arrAvg = 0;

          let sum = 0;
          for (let k = 0; k < chunk[i].length; k++) {
            sum += parseInt(chunk[i][k]);
          }
          arrAvg = sum / chunk[i].length;

          cardpm25.push(arrAvg);
        }
        console.log(cardpm25);
        var type = '';
        if (this.state.disease != 'Normal') {
          type = 'Other';
        } else {
          type = 'Normal';
        }
        //console.log(this.state.disease);

        for (let j = 0; j < cardpm25.length; j++) {
          var pm25 = floor(cardpm25[j]);
          var x = this.getIndex(
            '' + pm25,
            type,
            instructions,
            'startpm',
            'endpm',
            'type',
          );

          const dailyObj = {
            day: j,
            pm25: cardpm25[j],
            effect: instructions[x]['effect'],
            precaution: instructions[x]['precautions'],
            travelSuggestion: instructions[x]['travelSuggestion'],
          };
          this.setState({
            daily_suggestion: this.state.daily_suggestion.concat(dailyObj),
          });
        }
        console.log(this.state.daily_suggestion);
      })

      .catch(err => alert(err));
  };
  chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  }
  getIndex(sp, st, arr, startpm, endpm, type) {
    var nsp, nep;
    if ((sp >= 0) & (sp <= 12)) {
      nsp = '0';
      nep = '12';
    }
    if ((sp >= 13) & (sp <= 35)) {
      nsp = '13';
      nep = '35';
    }
    if ((sp >= 36) & (sp <= 55)) {
      nsp = '36';
      nep = '55';
    }
    if ((sp >= 56) & (sp <= 150)) {
      nsp = '56';
      nep = '150';
    }
    if ((sp >= 151) & (sp <= 250)) {
      nsp = '151';
      nep = '250';
    }
    if ((sp >= 251) & (sp <= 500)) {
      nsp = '251';
      nep = '500';
    }

    for (var i = 0; i < arr.length; i++) {
      if (
        (arr[i][startpm] === nsp) &
        (arr[i][endpm] === nep) &
        (arr[i][type] === st)
      ) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  }
  startDateChange = async date => {
    await this.setState({
      startDate: date,
      hour2: currentdate.getHours() + '00',
    });
    await this.startDifference();
  };

  startDifference() {
    var d1 = new Date(); //firstDate
    var d2 = new Date(this.state.startDate); //SecondDate

    var Difference_In_Time = abs(d1 - d2); //in milliseconds

    // this.state.startDate.getTime() - new Date().getTime();
    // this.state.startDate.getTime() - tempDate.getTime();

    // // To calculate the no. of days between two dates
    var Difference_In_Days = ceil(Difference_In_Time / (1000 * 3600 * 24));

    this.setState({
      dayDifference: Difference_In_Days,
    });
  }

  endDateChange = async date => {
    await this.setState({
      endDate: date,
    });
    await this.endDifference();
  };

  endDifference() {
    var d1 = new Date(this.state.endDate); //firstDate
    var d2 = new Date(this.state.startDate); //SecondDate

    var Difference_In_Time2 = abs(d1 - d2); //in milliseconds

    // To calculate the no. of days between two dates
    var Difference_In_Days2 =
      ceil(Difference_In_Time2 / (1000 * 3600 * 24)) + 1;
    this.setState({
      endingDay: Difference_In_Days2,
    });
  }

  callBackendAPI = async () => {
    const response = await fetch('http://192.168.43.64:1000/api/Pollution');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  renderItem = ({item}) => {
    return (
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: '#dcdcdc',
            marginTop: 15,
            marginBottom: 10,
            marginLeft: 10,
            marginRight: 10,
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>
          <ScrollView>
            <View>
              <Text style={{fontSize: 20, color: '#B12F31'}}>Day :</Text>
              <Text style={{fontSize: 16, color: 'black'}}>{item.day}</Text>
            </View>
            <View>
              <Text style={{fontSize: 20, color: '#B12F31'}}>Effect :</Text>
              <Text style={{fontSize: 16, color: 'black'}}>{item.effect}</Text>
            </View>
            <View>
              <Text style={{fontSize: 20, color: '#B12F31'}}>Precaution :</Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                {item.precaution}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 20, color: '#B12F31'}}>
                Travel Suggestion :
              </Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                {item.travelSuggestion}
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    );
  };
  renderResults = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      //toggles the visibilty of the text
    });
  };

  render() {
    let sampleData = [
      {
        seriesName: 'series1',
        data: [30, 200, 170, 250, 10],
        color: '#297AB1',
      },
      // { seriesName: 'series2', data: [20, 100, 150, 130, 15], color: 'yellow' }
    ];
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/guidance.png')}
              style={{
                width: 45,
                height: 45,
                marginTop: 35,
                marginLeft: 10,
                marginRight: 10,
              }}></Image>
            <Text style={styles.heading}>TRAVEL GUIDE</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/test.png')}
              style={{
                width: 25,
                height: 25,
                marginTop: 5,
                marginLeft: 10,
                marginRight: 10,
              }}></Image>
            <Text
              style={{
                fontSize: 16,
                color: '#B12F31',
                marginTop: 6,
                marginBottom: 10,
                justifyContent: 'center',
                alignSelf: 'center',
              }}>
              Please Fill the Following Form
            </Text>
          </View>
          <View style={styles.textview}>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../images/road.png')}
                style={{
                  width: 35,
                  height: 35,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 10,
                }}></Image>
              <Picker
                style={styles.inputfield}
                selectedValue={this.state.value}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({value: itemValue})
                }>
                <Picker.Item
                  label="Select a city"
                  color="gray"
                  justifyContent="center"
                  value=""
                />

                <Picker.Item label="Lahore" value="Lahore" />
                <Picker.Item label="Karachi" value="Karachi" />
                <Picker.Item label="Islamabad" value="Islamabad" />
                <Picker.Item label="Multan" value="Multan" />
                <Picker.Item label="Faisalabad" value="Faisalabad" />
                <Picker.Item label="Murree" value="Murree" />
              </Picker>
            </View>
            <View style={{flexDirection: 'row'}}>
              <DatePicker
                style={{width: 310}}
                date={this.state.startDate}
                mode="date"
                placeholder="Select Starting Date"
                // format="YYYY-MM-DD"
                minDate={moment().toDate()}
                maxDate={moment().add('days', 14)}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 5,
                    marginRight: 15,
                    width: 50,
                    marginTop: 7,
                  },
                  dateInput: {
                    marginLeft: 60,
                    marginTop: 10,
                    height: 40,
                    backgroundColor: 'white',
                  },
                  // ... You can check the source to find the other keys.
                }}
                // onDateChange={this.startDateChange}

                onDateChange={this.startDateChange}
              />
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <DatePicker
                style={{width: 310}}
                date={this.state.endDate}
                mode="date"
                placeholder="Select Ending Date"
                // format="YYYY-MM-DD"

                minDate={moment().toDate()}
                maxDate={moment().add('days', 14)}
                // minDate={moment().toDate()}
                // maxDate={lastDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 5,
                    marginRight: 15,
                    width: 50,
                    marginTop: 7,
                  },
                  dateInput: {
                    marginLeft: 60,
                    marginTop: 10,
                    height: 40,
                    backgroundColor: 'white',
                  },
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={this.endDateChange}
              />
            </View>

            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                source={require('../images/memory.png')}
                style={{
                  width: 35,
                  height: 35,
                  marginTop: 5,
                  marginLeft: 10,
                  marginRight: 10,
                }}></Image>

              <Picker
                style={styles.inputfield}
                selectedValue={this.state.disease}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({disease: itemValue})
                }>
                <Picker.Item label="Select a disease" color="gray" value="" />
                <Picker.Item
                  label="I have any heart Disease"
                  value="heart disease"
                />
                <Picker.Item
                  label="I have any Lungs disease"
                  value="lungs disease"
                />
                <Picker.Item
                  label="I have any kind of enviromental allergy"
                  value="any enviromental allergy"
                />
                <Picker.Item
                  label="My age is greater than 60 years"
                  value="older adult"
                />
                <Picker.Item
                  label="My age is less than 5 years"
                  value="children"
                />
                <Picker.Item
                  label="I belong to none of the above"
                  value="Normal"
                />
              </Picker>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.submit()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          {/* 
          <DotIndicator
            color="red"
            animationDuration={1200}
            count={5}
            animating={true}
            interaction={true}
            hidesWhenStopped={true}
          /> */}
          {this.state.isVisible ? (
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 5,
                  marginLeft: 10,
                }}>
                RESULTS
              </Text>
              <Image
                source={require('../images/statistics.png')}
                style={{
                  width: 35,
                  height: 35,
                  marginTop: 5,
                  marginLeft: 150,
                  marginRight: 10,
                  marginBottom: 30,
                }}></Image>
            </View>
          ) : null}
          <FlatList
            data={this.state.daily_suggestion}
            renderItem={this.renderItem}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    flex: 0.7,
    fontSize: 30,
    marginBottom: 44,
    marginTop: 44,
    color: '#B12F31',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 400,
    //backgroundColor: '#dc143c'
  },
  inputfield: {
    backgroundColor: 'white',
    borderRadius: 5,
    //borderWidth: 1,
    //borderColor: 'black',
    width: 250,
    height: 40,
    margin: 5,
  },
  label: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 50,
    margin: 2,
  },
  button: {
    backgroundColor: '#B12F31',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 130,
    height: 40,
    marginTop: 15,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 300,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
});
