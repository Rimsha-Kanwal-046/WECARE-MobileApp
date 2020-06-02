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
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import {Actions} from 'react-native-router-flux';
import SearchableDropdown from 'react-native-searchable-dropdown';

const items = [
  {name: 'itching'},
  {name: 'skin_rash'},
  {name: 'nodal_skin_eruptions'},
  {name: 'shivering'},
  {name: 'chills'},
  {name: 'joint_pain'},
  {name: 'stomach_pain'},
  {name: 'acidity'},
  {name: 'ulcers_on_tongue'},
  {name: 'muscle_wasting'},
  {name: 'vomiting'},
  {name: 'burning_micturition'},
  {name: 'spotting_ urination'},
  {name: 'fatigue'},
  {name: 'weight_gain'},
  {name: 'anxiety'},
  {name: 'cold_hands_and_feets'},
  {name: 'mood_swings'},
  {name: 'weight_loss'},
  {name: 'restlessness'},
  {name: 'lethargy'},
  {name: 'patches_in_throat'},
  {name: 'irregular_sugar_level'},
  {name: 'cough'},
  {name: 'high_fever'},
  {name: 'sunken_eyes'},
  {name: 'breathlessness'},
  {name: 'sweating'},
  {name: 'dehydration'},
  {name: 'indigestion'},
  {name: 'headache'},
  {name: 'yellowish_skin'},
  {name: 'dark_urine'},
  {name: 'nausea'},
  {name: 'loss_of_appetite'},
  {name: 'pain_behind_the_eyes'},
  {name: 'back_pain'},
  {name: 'constipation'},
  {name: 'abdominal_pain'},
  {name: 'diarrhoea'},
  {name: 'mild_fever'},
  {name: 'yellow_urine'},
  {name: 'yellowing_of_eyes'},
  {name: 'acute_liver_failure'},
  {name: 'fluid_overload'},
  {name: 'swelling_of_stomach'},
  {name: 'swelled_lymph_nodes'},
  {name: 'malaise'},
  {name: 'blurred_and_distorted_vision'},
  {name: 'phlegm'},
  {name: 'throat_irritation'},
  {name: 'redness_of_eyes'},
  {name: 'sinus_pressure'},
  {name: 'runny_nose'},
  {name: 'congestion'},
  {name: 'chest_pain'},
  {name: 'weakness_in_limbs'},
  {name: 'fast_heart_rate'},
  {name: 'pain_during_bowel_movements'},
  {name: 'pain_in_anal_region'},
  {name: 'bloody_stool'},
  {name: 'irritation_in_anus'},
  {name: 'neck_pain'},
  {name: 'dizziness'},
  {name: 'cramps'},
  {name: 'bruising'},
  {name: 'obesity'},
  {name: 'swollen_legs'},
  {name: 'swollen_blood_vessels'},
  {name: 'puffy_face_and_eyes'},
  {name: 'enlarged_thyroid'},
  {name: 'brittle_nails'},
  {name: 'swollen_extremeties'},
  {name: 'excessive_hunger'},
  {name: 'drying_and_tingling_lips'},
  {name: 'slurred_speech'},
  {name: 'knee_pain'},
  {name: 'hip_joint_pain'},
  {name: 'muscle_weakness'},
  {name: 'stiff_neck'},
  {name: 'swelling_joints'},
  {name: 'movement_stiffness'},
  {name: 'spinning_movements'},
  {name: 'loss_of_balance'},
  {name: 'unsteadiness'},
  {name: 'weakness_of_one_body_side'},
  {name: 'loss_of_smell'},
  {name: 'bladder_discomfort'},
  {name: 'foul_smell_of urine'},
  {name: 'continuous_feel_of_urine'},
  {name: 'passage_of_gases'},
  {name: 'internal_itching'},
  {name: 'toxic_look_(typhos)'},
  {name: 'depression'},
  {name: 'irritability'},
  {name: 'muscle_pain'},
  {name: 'altered_sensorium'},
  {name: 'red_spots_over_body'},
  {name: 'belly_pain'},
  {name: 'abnormal_menstruation'},
  {name: 'dischromic _patches'},
  {name: 'watering_from_eyes'},
  {name: 'increased_appetite'},
  {name: 'polyuria'},
  {name: 'family_history'},
  {name: 'mucoid_sputum'},
  {name: 'rusty_sputum'},
  {name: 'lack_of_concentration'},
  {name: 'visual_disturbances'},
  {name: 'receiving_blood_transfusion'},
  {name: 'receiving_unsterile_injections'},
  {name: 'coma'},
  {name: 'stomach_bleeding'},
  {name: 'distention_of_abdomen'},
  {name: 'history_of_alcohol_consumption'},
  {name: 'fluid_overload'},
  {name: 'blood_in_sputum'},
  {name: 'prominent_veins_on_calf'},
  {name: 'palpitations'},
  {name: 'painful_walking'},
  {name: 'pus_filled_pimples'},
  {name: 'blackheads'},
  {name: 'scurring'},
  {name: 'skin_peeling'},
  {name: 'silver_like_dusting'},
  {name: 'small_dents_in_nails'},
  {name: 'inflammatory_nails'},
  {name: 'blister'},
  {name: 'red_sore_around_nose'},
  {name: 'yellow_crust_ooze'},
  {name: 'prognosis'},
];

export default class FirstAid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      symp: '',
      disease: '',
      selectedItems: [],
      isVisible: false,
      isVisible1: false,

      symptomArray: [],
      value: '',
      suggestions: [],
      mydata: null,
      second: null,
      third: null,
    };
  }

  onSelectedItemsChange = selectedItems => {
    this.setState({selectedItems});
  };

  submit = async () => {
    await this.state.selectedItems;

    fetch('http://192.168.43.64:1000/api/Disease', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symptoms: this.state.selectedItems,
      }),
    })
      .then(async data => {
        console.log(data);
        var data = await this.callBackendAPI();
        console.log(data);
        this.setState({
          mydata: data.express[0],
          second: data.express[1],
          third: data.express[2],
        });
        alert(
          this.state.mydata + ' ' + this.state.second + ' ' + this.state.third,
        );
      })
      .catch(err => alert(err));
  };

  callBackendAPI = async () => {
    const response = await fetch('http://192.168.43.64:1000/api/Disease');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  };

  renderResults = () => {
    this.setState({
      isVisible: !this.state.isVisible,
      //toggles the visibilty of the text
    });
  };
  renderResults1 = () => {
    this.setState({
      isVisible1: !this.state.isVisible1,
      //toggles the visibilty of the text
    });
  };
  render() {
    const {selectedItems} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../images/falogo.png')}
              style={{
                width: 80,
                height: 80,
                marginTop: 35,
                marginLeft: 10,
                marginRight: 19,
              }}></Image>
            <View style={{marginTop: 20}}>
              <Text style={styles.heading}>First Aid</Text>
            </View>
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
          <View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginTop: 17}}>
                <Image
                  source={require('../images/symptoms.png')}
                  style={{
                    width: 35,
                    height: 35,
                    marginTop: 5,
                    marginLeft: 10,
                    marginRight: 10,
                  }}></Image>
              </View>
              <View style={{width: 300, marginTop: 20}}>
                <MultiSelect
                  hideTags
                  items={items}
                  uniqueKey="name"
                  ref={component => {
                    this.multiSelect = component;
                  }}
                  onSelectedItemsChange={this.onSelectedItemsChange}
                  selectedItems={selectedItems}
                  selectText="Select your Symptoms"
                  searchInputPlaceholderText="Search Items..."
                  onChangeInput={text => console.log(text)}
                  altFontFamily="ProximaNova-Light"
                  tagRemoveIconColor="#CCC"
                  tagBorderColor="#CCC"
                  tagTextColor="#CCC"
                  selectedItemTextColor="red"
                  selectedItemIconColor="#CCC"
                  itemTextColor="#000"
                  displayKey="name"
                  searchInputStyle={{color: '#CCC'}}
                  submitButtonColor="gray"
                  submitButtonText="Submit"
                />
              </View>
            </View>
            <View style={styles.textview1}>
              <Text style={{fontSize: 16, fontWeight: 'bold', marginLeft: 10}}>
                {this.state.selectedItems}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.submit().then(this.renderResults())}>
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
          {this.state.isVisible ? (
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#B12F31',
                  marginTop: 6,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                You may have following diseases:
              </Text>
              <View style={styles.diseaseview}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                  }}>
                  1 : {this.state.mydata}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                  }}>
                  2 : {this.state.second}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 18,
                    fontWeight: 'bold',
                    alignSelf: 'flex-start',
                    justifyContent: 'flex-start',
                  }}>
                  3 : {this.state.third}
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.renderResults1()}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      fontWeight: 'bold',
                      alignSelf: 'center',
                      justifyContent: 'center',
                    }}>
                    Check FirstAid
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}
          {this.state.isVisible1 ? (
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#B12F31',
                  marginTop: 6,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                Following is the First Aid
              </Text>
              <View style={styles.diseaseview}>
                <Text>FIRST AID HERE</Text>
              </View>
            </View>
          ) : null}
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
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    margin: 2,
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
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 400,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
  diseaseview: {
    backgroundColor: '#dcdcdc',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 330,
    height: 170,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
  },
  textview1: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 80,
    marginTop: 7,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
});
