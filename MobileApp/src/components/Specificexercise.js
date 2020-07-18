import React, {Component} from 'react';
import {Text, View, StyleSheet, Picker} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Specificexercise extends Component {
  constructor(props) {
    super();
    this.state = {
      exercises: '',
      value2: '',
      value: '',
    };
  }
  disease = async () => {
    if (this.state.value == '') {
      alert('Select a Disease');
    }
    if (this.state.value == 'Diabetes') {
      this.setState({
        ex_disease:
          '1. Walking: Brisk walk for 30 min , 5 days a week.\n' +
          '2. Cycling : Go for Cycling atleast once a week\n' +
          '3. Yoga : Light Yoga daily is good for your health\n',
      });
    }
    if (this.state.value == 'Heart Disease') {
      this.setState({
        ex_disease:
          '1. Choose an aerobic activity such as walking, swimming, light jogging, or biking.\n' +
          '2. Do this at least 3 to 4 times a week. \n' +
          '3. Always do 5 minutes of stretching or moving around to warm up your muscles and heart before exercising.\n',
      });
    }
    if (this.state.value == 'Asthma') {
      this.setState({
        ex_disease:
          '1. Swimming is one of the best exercises for asthma because it builds up the muscles you use for breathing.\n' +
          '2. Yoga is another good exercise for asthma. \n' +
          '3. Walking and Biking.\n',
      });
    }
    if (this.state.value == 'Cancer') {
      this.setState({
        ex_disease:
          '1. Flexibility exercises (stretching).\n' +
          '2. Aerobic exercise, such as brisk walking, jogging, and swimming. \n' +
          '3. Resistance training (Iifting weights or isometric exercise), which builds muscle..\n',
      });
    }
  };

  pain = async () => {
    if (this.state.value2 == '') {
      alert('Select a Type');
    }
    if (this.state.value2 == 'Backpain') {
      this.setState({
        ex_pain:
          '1. Plank: Plank for 30sec-1min.\n' +
          '2. Stretches : Do arm nd back streches\n' +
          '3. Avoid leg exercises and lifting\n' +
          '4. Wall Situps',
      });
    }

    if (this.state.value2 == 'Musclepain') {
      this.setState({
        ex_pain:
          '1. Use an icepack for sore muscles.\n' +
          '2. Stretches \n' +
          '3. Light exercises which include swimming and walking',
      });
    }
    if (this.state.value2 == 'Stomachache') {
      this.setState({
        ex_pain:
          '1. A small walk after a meal.\n' +
          '2. Massaging your abdominal area can help to relieve sensations of tightness, cramping and bloating\n' +
          '3. Regualar exercise\n' +
          '4. Yoga',
      });
    }
    if (this.state.value2 == 'Migraines') {
      this.setState({
        ex_pain:
          '1. adults should do 150 minutes of moderate-intensity aerobic exercise (eg, walking)\n' +
          '2. 2 or more days a week of muscle-strengthening exercises (eg, light weight lifting) each week\n',
      });
    }
    if (this.state.value2 == 'Arthritis') {
      this.setState({
        ex_pain:
          '1. Stretching daily, ideally in the morning, is important for relieving Arthritis.\n' +
          '2. Flowing movements, such as tai chi and yoga\n' +
          '3. Walking or cycling\n' +
          '4. Pilates\n',
      });
    }
  };
  render() {
    return (
      <View>
        <View style={styles.View}>
          <Picker
            style={{backgroundColor: 'white', margin: 10}}
            selectedValue={this.state.value}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({value: itemValue})
            }>
            <Picker.Item
              label="Select Disease"
              color="gray"
              justifyContent="center"
              value=""
            />

            <Picker.Item label="Cancer" value="Cancer" />
            <Picker.Item label="Diabetes" value="Diabetes" />
            <Picker.Item label="Heart Disease" value="Heart Disease" />
            <Picker.Item label="Asthma" value="Asthma" />
          </Picker>
          <TouchableOpacity
            onPress={() => this.disease()}
            style={{
              width: 100,
              height: 30,
              backgroundColor: '#B12F31',
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>
              Check
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 280,
              height: 130,
              alignSelf: 'center',
              margin: 10,
            }}>
            <Text style={{margin: 10, fontSize: 14}}>
              {this.state.ex_disease}
            </Text>
          </View>
        </View>
        <View style={styles.View}>
          <Picker
            style={{backgroundColor: 'white', margin: 10}}
            selectedValue={this.state.value2}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({value2: itemValue})
            }>
            <Picker.Item
              label="Select Type of Body Pain"
              color="gray"
              justifyContent="center"
              value=""
            />

            <Picker.Item label="Back Pain" value="Backpain" />
            <Picker.Item label="Muscles Pain" value="Musclepain" />
            <Picker.Item label="Stomachache" value="Stomachache" />
            <Picker.Item label="Migraines" value="Migraines" />
            <Picker.Item label="Arthritis" value="Arthritis" />
          </Picker>
          <TouchableOpacity
            onPress={() => this.pain()}
            style={{
              width: 100,
              height: 30,
              backgroundColor: '#B12F31',
              alignSelf: 'center',
            }}>
            <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>
              Check
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              width: 280,
              height: 130,
              alignSelf: 'center',
              margin: 10,
            }}>
            <Text style={{margin: 10, fontSize: 14}}>{this.state.ex_pain}</Text>
          </View>
        </View>
      </View>
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
  View: {
    backgroundColor: '#A7A5A9',
    width: 310,
    height: 260,
    alignSelf: 'center',
    margin: 10,
  },
});
