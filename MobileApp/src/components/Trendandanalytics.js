import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {Dropdown} from 'react-native-material-dropdown';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from 'react-native-table-component';
let dropdowncities = [
  {
    value: 'Lahore',
  },
  {
    value: 'Karachi',
  },
  {
    value: 'Islamabad',
  },
  {
    value: 'Peshawar',
  },
  {
    value: 'Faisalabad',
  },
];

import PureChart from 'react-native-pure-chart';
//import Panelstrends from './Panelstrends';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

var TEMP_DATA = [];

var POLLUTION_DATA = [];

// let pasttempchartdata = [
//   {
//     seriesName: 'series1',
//     data: [
//       {x: '2018-02-01', y: 30},
//       {x: '2018-02-02', y: 200},
//       {x: '2018-02-03', y: 170},
//       {x: '2018-02-04', y: 250},
//       {x: '2018-02-05', y: 10},
//     ],
//     color: '#297AB1',
//   },
//   {
//     seriesName: 'series2',
//     data: [
//       {x: '2018-02-01', y: 20},
//       {x: '2018-02-02', y: 100},
//       {x: '2018-02-03', y: 140},
//       {x: '2018-02-04', y: 550},
//       {x: '2018-02-05', y: 40},
//     ],
//     color: 'red',
//   },
//   {
//     seriesName: 'series3',
//     data: [
//       {x: '2018-02-01', y: 10},
//       {x: '2018-02-02', y: 190},
//       {x: '2018-02-03', y: 130},
//       {x: '2018-02-04', y: 50},
//       {x: '2018-02-05', y: 40},
//     ],
//     color: 'black',
//   },
// ];

function TempItem({index, title, temp}) {
  return (
    <View style={(styles.item, {flexDirection: 'row'})}>
      <Text style={(styles.title, {marginRight: 50})}>{index}</Text>
      <Text style={(styles.title, {marginRight: 120})}>{title}</Text>
      <Text style={(styles.title, {marginRight: 60})}>{temp}</Text>
    </View>
  );
}
function PollItem({index, title, pm25}) {
  return (
    <View style={(styles.item, {flexDirection: 'row'})}>
      <Text style={(styles.title, {marginRight: 50})}>{index}</Text>
      <Text style={(styles.title, {marginRight: 100})}>{title}</Text>
      <Text style={(styles.title, {marginRight: 60})}>{pm25}</Text>
    </View>
  );
}

export default class Trendandanalytics extends Component {
  constructor(props) {
    super();
    this.state = {
      data: '',
      chartdata: '',
      value: '',
      isSpecific: false,

      title: '',
      pm25: '',
      isVisible1: false,
    };
  }

  callBackendAPI = async url => {
    const response = await fetch(url);

    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  //for displaying pollution category on card
  settingCardData(sp) {
    var result = '';
    if ((sp >= 0) & (sp <= 12)) {
      result = 'Pollution Level is Good';
    }
    if ((sp >= 12) & (sp <= 35)) {
      result = 'Pollution Level is Moderate';
    }
    if ((sp >= 35) & (sp <= 55)) {
      result = 'Pollution Level is Unhealthy for sensitive groups';
    }
    if ((sp >= 55) & (sp <= 150)) {
      result = 'Pollution Level is Unhealthy';
    }
    if ((sp >= 150) & (sp <= 250)) {
      result = 'Pollution Level is Very Unhealthy';
    }
    if ((sp >= 250) & (sp <= 500)) {
      result = 'Pollution Level is Hazardous';
    }
    return result;
  }
  setTempTable(cities, temp, type) {
    var end = cities.length - 2;
    cities = cities.substring(2, end);
    cities = cities.split(", Pakistan', '");
    var end = temp.length - 1;
    temp = temp.substring(1, end);
    temp = temp.split(', ');
    for (let i = 0; i < cities.length; i++) {
      if (type == 'Pollution') {
        var p = {
          title: cities[i],
          pm25: temp[i],
        };
        POLLUTION_DATA.push(p);
      }
      if (type == 'Temperature') {
        var t = {
          title: cities[i],

          temp: temp[i],
        };
        TEMP_DATA.push(t);
      }
    }
  }
  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI('http://192.168.1.100:1000/api/CurrentTrends/')
      .then(res => {
        this.setState({data: res.express});
        this.setTempTable(
          this.state.data[36],
          this.state.data[37],
          'Temperature',
        );
        this.setTempTable(
          this.state.data[38],
          this.state.data[39],
          'Pollution',
        );
      })
      //.then(res => this.setState({data: res.express}))
      .catch(err => console.log(err));

    this.callBackendAPI('http://192.168.1.100:1000/api/CurrentTrends/chart')
      .then(res =>
        this.setState({
          chartdata: res.express,
          isVisible1: !this.state.isVisible1,
        }),
      )
      .catch(err => console.log(err));
  }
  submit = async () => {
    if (this.state.value == '') {
      alert('Please Enter a city');
    } else {
      fetch('http://192.168.1.100:1000/api/CurrentTrends/city', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          city: this.state.value,
        }),
      })
        .then(async data => {
          var data = await this.callBackendAPI(
            'http://192.168.1.100:1000/api/CurrentTrends/c',
          );
          console.log(data.express);
          this.setState({
            chartdata: data.express,
          });
          if (this.state.chartdata.length > 9) {
            this.setState({
              isSpecific: !this.state.isVisible1,
            });
          }
        })
        .catch(err => alert(err));
    }
  };
  graphPollution = (xval, yval) => {
    var yvals = this.yvalue(xval);
    var xvals = this.xvalue(yval);
    var graphArray = [];

    for (let i = 0; i < xvals.length; i++) {
      var point = {x: xvals[i], y: yvals[i]};

      graphArray.push(point);
    }

    let chart = [
      {
        seriesName: 'series1',
        data: graphArray,
        color: '#297AB1',
      },
    ];
    return chart;
  };
  xvalue = label => {
    var labels = [];
    var end = label.length - 1;
    label = label.substring(1, end);
    label = label.split(', ');
    for (let i = 0; i < label.length; i++) {
      let chunk = label[i].substring(1, label[i].length - 1);
      labels.push(chunk);
    }
    console.log(labels);
    return labels;
  };
  yvalue = array => {
    var finalArray = [];
    var end = array.length - 1;
    array = array.substring(1, end);
    array = array.split(', ');
    for (let i = 0; i < array.length; i++) {
      let chunk = parseInt(array[i]);
      var point = {x: 'PM 2.5', y: chunk};

      finalArray.push(chunk);
    }
    console.log(finalArray);
    return finalArray;
  };
  splitForGraph(array) {
    var finalArray = [];
    var end = array.length - 1;
    array = array.substring(1, end);
    array = array.split(', ');
    for (let i = 0; i < array.length; i++) {
      let chunk = array[i].substring(1, array[i].length - 1);

      finalArray.push(chunk);
    }
    return finalArray;
  }
  mergeLabel(array, label) {
    var returnArray = [];
    for (let i = 0; i < array.length; i++) {
      var point = {x: label[i], y: parseInt(array[i])};

      returnArray.push(point);
    }
    return returnArray;
  }
  graph(max, min, avg, label) {
    var maxarray = this.splitForGraph(max);
    var minarray = this.splitForGraph(min);
    var avgarray = this.splitForGraph(avg);

    var labels = [];
    var end = label.length - 1;
    label = label.substring(1, end);
    label = label.split(', ');
    for (let i = 0; i < label.length; i++) {
      let chunk = label[i].substring(1, label[i].length - 1);
      labels.push(chunk);
    }

    var data1 = this.mergeLabel(maxarray, labels);
    var data2 = this.mergeLabel(minarray, labels);
    var data3 = this.mergeLabel(avgarray, labels);
    console.log(data1);
    let chart = [
      {
        seriesName: 'series1',
        data: data1,
        color: '#297AB1',
      },
      {
        seriesName: 'series2',
        data: data2,
        color: 'red',
      },
      {
        seriesName: 'series3',
        data: data3,
        color: 'black',
      },
    ];
    // console.log(chart.data);

    return chart;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{flexDirection: 'row'}}>
            <Card style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.city}>Islamabad</Text>
                <Image
                  source={{uri: this.state.data[0]}}
                  // source={this.state.data[0]}
                  style={{width: 20, height: 20, marginHorizontal: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  {this.state.data[1]}
                </Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/weatherforecast.png')}
                    // source={this.state.data[0]}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  {this.state.data[2]}
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/humidity.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Humidity : {this.state.data[3]} Km/h
                </Text>

                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/wind.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Wind : {this.state.data[4]} Km/h
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/airpollution.png')}
                    style={{width: 18, height: 18}}
                  />
                  {this.settingCardData(this.state.data[5])}
                </Text>
              </View>
            </Card>

            <Card style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.city}>Lahore</Text>
                <Image
                  source={{uri: this.state.data[6]}}
                  style={{width: 20, height: 20, marginHorizontal: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  {this.state.data[7]}' C
                </Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/weatherforecast.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  {this.state.data[8]}
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/humidity.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Humidity : {this.state.data[9]} Km/h
                </Text>

                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/wind.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Wind : {this.state.data[10]} Km/h
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/airpollution.png')}
                    style={{width: 18, height: 18}}
                  />
                  {this.settingCardData(this.state.data[11])}{' '}
                </Text>
              </View>
            </Card>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Card style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.city}>Karachi</Text>
                <Image
                  source={{uri: this.state.data[12]}}
                  style={{width: 20, height: 20, marginHorizontal: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  {this.state.data[13]}' C
                </Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/weatherforecast.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  {this.state.data[14]}
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/humidity.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Humidity : {this.state.data[15]} Km/h
                </Text>

                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/wind.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Wind : {this.state.data[16]} Km/h
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/airpollution.png')}
                    style={{width: 18, height: 18}}
                  />
                  {this.settingCardData(this.state.data[17])}
                </Text>
              </View>
            </Card>

            <Card style={styles.card}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.city}>Peshawar</Text>
                <Image
                  source={{uri: this.state.data[18]}}
                  style={{width: 20, height: 20, marginHorizontal: 5}}
                />
                <Text
                  style={{
                    fontSize: 12,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  {this.state.data[19]}' C
                </Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/weatherforecast.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  {this.state.data[20]}
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/humidity.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Humidity : {this.state.data[21]} Km/h
                </Text>

                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/wind.png')}
                    style={{width: 18, height: 18, marginHorizontal: 10}}
                  />
                  Wind : {this.state.data[22]} Km/h
                </Text>
                <Text style={{fontSize: 12}}>
                  <Image
                    source={require('../images/airpollution.png')}
                    style={{width: 18, height: 18}}
                  />
                  {this.settingCardData(this.state.data[23])}
                </Text>
              </View>
            </Card>
          </View>
          <View>
            <Collapse>
              <CollapseHeader>
                <View style={styles.header}>
                  <Text
                    style={{fontSize: 20, color: 'white', alignSelf: 'center'}}>
                    Major Cities Ranking By Temperature
                  </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{backgroundColor: '#dcdcdc', width: 330}}>
                  <View style={(styles.item, {flexDirection: 'row'})}>
                    <Text style={(styles.title, {marginRight: 50})}>No</Text>
                    <Text style={(styles.title, {marginRight: 100})}>City</Text>
                    <Text style={(styles.title, {marginRight: 30})}>
                      Temperature
                    </Text>
                  </View>
                  <FlatList
                    data={TEMP_DATA}
                    renderItem={({item, index}) => (
                      <TempItem
                        title={item.title}
                        temp={item.temp}
                        index={index}
                      />
                    )}
                    keyExtractor={(item, key) => key}
                  />
                </View>
              </CollapseBody>
            </Collapse>
          </View>
          <View>
            <Collapse>
              <CollapseHeader>
                <View style={styles.header}>
                  <Text
                    style={{fontSize: 22, color: 'white', alignSelf: 'center'}}>
                    Major Cities Ranking By Pollution
                  </Text>
                </View>
              </CollapseHeader>
              <CollapseBody>
                <View style={{backgroundColor: '#dcdcdc', width: 330}}>
                  <View style={(styles.item, {flexDirection: 'row'})}>
                    <Text style={(styles.title, {marginRight: 50})}>No</Text>
                    <Text style={(styles.title, {marginRight: 100})}>City</Text>
                    <Text style={(styles.title, {marginRight: 30})}>
                      Pollution
                    </Text>
                  </View>
                  <FlatList
                    data={POLLUTION_DATA}
                    renderItem={({item, index}) => (
                      <PollItem
                        title={item.title}
                        pm25={item.pm25}
                        index={index}
                      />
                    )}
                    keyExtractor={(item, key) => key}
                  />
                </View>
              </CollapseBody>
            </Collapse>
          </View>

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
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.setState({
                isSpecific: !this.state.isVisible1,
              });
              this.submit();
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Check
            </Text>
          </TouchableOpacity>
          {this.state.isSpecific ? (
            <View>
              <Card style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.city}>{this.state.value}</Text>
                  <Image
                    source={{uri: this.state.chartdata[9]}}
                    style={{width: 20, height: 20, marginHorizontal: 5}}
                  />
                  <Text
                    style={{
                      fontSize: 12,
                      justifyContent: 'center',
                      alignSelf: 'center',
                      fontWeight: 'bold',
                    }}>
                    {this.state.chartdata[10]}' C
                  </Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                  <Text style={{fontSize: 12}}>
                    <Image
                      source={require('../images/weatherforecast.png')}
                      style={{width: 18, height: 18, marginHorizontal: 10}}
                    />
                    {this.state.chartdata[11]}
                  </Text>
                  <Text style={{fontSize: 12}}>
                    <Image
                      source={require('../images/humidity.png')}
                      style={{width: 18, height: 18, marginHorizontal: 10}}
                    />
                    Humidity : {this.state.chartdata[12]} Km/h
                  </Text>

                  <Text style={{fontSize: 12}}>
                    <Image
                      source={require('../images/wind.png')}
                      style={{width: 18, height: 18, marginHorizontal: 10}}
                    />
                    Wind : {this.state.chartdata[13]} Km/h
                  </Text>
                  <Text style={{fontSize: 12}}>
                    <Image
                      source={require('../images/airpollution.png')}
                      style={{width: 18, height: 18}}
                    />
                    {this.settingCardData(this.state.chartdata[14])}
                  </Text>
                </View>
              </Card>
            </View>
          ) : null}

          {this.state.isVisible1 ? (
            <View>
              <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                Pollution Of Past 10 Days
              </Text>
              <PureChart
                data={this.graphPollution(
                  this.state.chartdata[8],
                  this.state.chartdata[1],
                )}
                type="line"
              />

              <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                Temperature Of Past 10 Days
              </Text>
              <PureChart
                data={this.graph(
                  this.state.chartdata[0],
                  this.state.chartdata[2],
                  this.state.chartdata[3],
                  this.state.chartdata[1],
                )}
                type="line"
              />
              <Text style={{fontSize: 16, color: 'blue', fontWeight: 'bold'}}>
                Temperature Of Upcoming 10 Days
              </Text>
              <PureChart
                data={this.graph(
                  this.state.chartdata[4],
                  this.state.chartdata[6],
                  this.state.chartdata[7],
                  this.state.chartdata[5],
                )}
                type="line"
              />
            </View>
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  city: {
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#B12F31',
    marginRight: 30,
  },
  card: {
    marginTop: 5,
    backgroundColor: '#dcdcdc',
    // marginLeft: 18,
    // marginTop: 40,
    justifyContent: 'center',
    padding: 5,
    margin: 5,
    width: 160,
  },
  textcard: {
    fontSize: 10,
  },
  header: {
    backgroundColor: '#B12F31',
    width: 330,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 5,

    justifyContent: 'center',
  },
  chart: {
    width: 2000000,
    height: 100000,
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
});
