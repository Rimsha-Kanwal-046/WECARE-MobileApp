import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import { Dropdown } from 'react-native-material-dropdown';

let dropdowncities = [{
      value: 'Lahore',
    }, {
      value: 'Karachi',
    }, {
      value: 'Islamabad',
    }, {
      value: 'Peshawar',
    }, {
      value: 'Faisalabad',
    }];

import PureChart from 'react-native-pure-chart';
//import Panelstrends from './Panelstrends';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

const TEMP_DATA = [
  {
    
    title: 'Lahore',
    temp:"50"
  },
  {
    
    title: 'Karcahi',

     temp:"50"
  },
  {
    
    title: 'Peshawar',
 
     temp:"50"
  },
];

const POLLUTION_DATA = [
  {
    
    title: 'Faisalabad',
    pm25:"50"
  },
  {
    
    title: 'Lahore',

     pm25:"34"
  },
  {
    
    title: 'Peshawar',
 
     pm25:"50"
  },
];

 let pasttempchartdata = [
    {
      seriesName: 'series1',
      data: [
        {x: '2018-02-01', y: 30},
        {x: '2018-02-02', y: 200},
        {x: '2018-02-03', y: 170},
        {x: '2018-02-04', y: 250},
        {x: '2018-02-05', y: 10}
      ],
      color: '#297AB1'
    },
    {
      seriesName: 'series2',
      data: [
        {x: '2018-02-01', y: 20},
        {x: '2018-02-02', y: 100},
        {x: '2018-02-03', y: 140},
        {x: '2018-02-04', y: 550},
        {x: '2018-02-05', y: 40}
      ],
      color: 'red'
    }, {
      seriesName: 'series3',
      data: [
        {x: '2018-02-01', y: 10},
        {x: '2018-02-02', y: 190},
        {x: '2018-02-03', y: 130},
        {x: '2018-02-04', y: 50},
        {x: '2018-02-05', y: 40}
      ],
      color: 'black'
    }
  ]


function TempItem({index, title,  temp }) {
  
  return (
    

    <View style={styles.item, { flexDirection:'row'}}>
      <Text style={styles.title, {marginRight:50}}>{index}</Text>
          <Text style={styles.title, {marginRight:120}}>{title}</Text>
              <Text style={styles.title, {marginRight:60}}>{temp}</Text>
    </View>
    
  );
}
function PollItem({index, title,  pm25 }) {
  
  return (
    

    <View style={styles.item, { flexDirection:'row'}}>
      <Text style={styles.title, {marginRight:50}}>{index}</Text>
          <Text style={styles.title, {marginRight:120}}>{title}</Text>
              <Text style={styles.title, {marginRight:60}}>{pm25}</Text>
    </View>
    
  );
}

export default class Trendandanalytics extends Component {
  constructor(props) {
    super();
    this.state = {
    title:'',
    pm25:'',
    }
    }
  render() {
   
    return (
      <View style={styles.container}>
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Card style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.city}>Peshawar</Text>
              <Image
                source={require('../images/cloud.png')}
                style={{width: 20, height: 20, marginHorizontal: 5}}
              />
              <Text
                style={{
                  fontSize: 12,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                39' C
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/weatherforecast.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Partially Cloudy
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/humidity.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Humidity : 15 Km/h
              </Text>

              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/wind.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Wind : 6Km/h
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/airpollution.png')}
                  style={{width: 18, height: 18}}
                />
                Pollution in Air is Normal
              </Text>
            </View>
          </Card>

          <Card style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.city}>Karachi</Text>
              <Image
                source={require('../images/cloud.png')}
                style={{width: 20, height: 20, marginHorizontal: 5}}
              />
              <Text
                style={{
                  fontSize: 12,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                39' C
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/weatherforecast.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Partially Cloudy
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/humidity.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Humidity : 15 Km/h
              </Text>

              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/wind.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Wind : 6Km/h
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/airpollution.png')}
                  style={{width: 18, height: 18}}
                />
                Pollution in Air is Normal
              </Text>
            </View>
          </Card>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Card style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.city}>Islamabad</Text>
              <Image
                source={require('../images/cloud.png')}
                style={{width: 20, height: 20, marginHorizontal: 5}}
              />
              <Text
                style={{
                  fontSize: 12,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                39' C
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/weatherforecast.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Partially Cloudy
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/humidity.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Humidity : 15 Km/h
              </Text>

              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/wind.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Wind : 6Km/h
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/airpollution.png')}
                  style={{width: 18, height: 18}}
                />
                Pollution in Air is Normal
              </Text>
            </View>
          </Card>

          <Card style={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.city}>Lahore</Text>
              <Image
                source={require('../images/cloud.png')}
                style={{width: 20, height: 20, marginHorizontal: 5}}
              />
              <Text
                style={{
                  fontSize: 12,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  fontWeight: 'bold',
                }}>
                39' C
              </Text>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/weatherforecast.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Partially Cloudy
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/humidity.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Humidity : 15 Km/h
              </Text>

              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/wind.png')}
                  style={{width: 18, height: 18, marginHorizontal: 10}}
                />
                Wind : 6Km/h
              </Text>
              <Text style={{fontSize: 12}}>
                <Image
                  source={require('../images/airpollution.png')}
                  style={{width: 18, height: 18}}
                />
                Pollution in Air is Normal
              </Text>
            </View>
          </Card>
        </View>

<View>

<Collapse>
    <CollapseHeader>
      <View style={styles.header}>
        <Text style={{fontSize:22, color:'white', alignSelf:'center'}}>Major Cities Ranking By Temperature</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
    <View style={{ backgroundColor:'#dcdcdc', width:330}}>
     <View style={styles.item, { flexDirection:'row'}}>
      <Text style={styles.title, {marginRight:50}}>No</Text>
          <Text style={styles.title, {marginRight:100}}>City</Text>
              <Text style={styles.title, {marginRight:30}}>Temperature</Text>
    </View>
    <FlatList
    data={TEMP_DATA}
    renderItem={({ item, index }) => (
      
  <TempItem title={item.title} temp={item.temp} index={index}  />
       
    )}
    keyExtractor={(item,key) => key}
/>
  
      </View>
    </CollapseBody>
</Collapse>




</View>
<View>

<Collapse>
    <CollapseHeader>
      <View style={styles.header}>
        <Text style={{fontSize:22, color:'white', alignSelf:'center'}}>Major Cities Ranking By Pollution</Text>
      </View>
    </CollapseHeader>
    <CollapseBody>
    <View style={{ backgroundColor:'#dcdcdc', width:330}}>
     <View style={styles.item, { flexDirection:'row'}}>
      <Text style={styles.title, {marginRight:50}}>No</Text>
          <Text style={styles.title, {marginRight:100}}>City</Text>
              <Text style={styles.title, {marginRight:30}}>Pollution</Text>
    </View>
    <FlatList
    data={POLLUTION_DATA}
    renderItem={({ item, index }) => (
      
  <PollItem title={item.title} pm25={item.pm25} index={index}  />
       
    )}
    keyExtractor={(item,key) => key}
/>
  
      </View>
    </CollapseBody>
</Collapse>




</View>
<Dropdown
        label='Select a City'
        data={dropdowncities}
      />
<Text style={{fontSize:16, color:'blue',fontWeight:'bold'}}>Temperature Of Past 10 Days </Text>
<PureChart data={pasttempchartdata} type='line'   />
<Text style={{fontSize:16, color:'blue',fontWeight:'bold'}}>Pollution Of Past 10 Days </Text>
<PureChart data={pasttempchartdata} type='line'   />
<Text style={{fontSize:16, color:'blue',fontWeight:'bold'}}>Temperature Of Upcoming 10 Days </Text>
<PureChart data={pasttempchartdata} type='line'   />

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
  header:{backgroundColor:'#B12F31',
  width:330,
  height:40,
      borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    marginTop:5,

    justifyContent:'center',
},
chart:{
  width:2000000,
  height:100000
}
});
