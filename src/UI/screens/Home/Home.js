import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {landing} from '../../../styles/screens/landing';
import {misc, ph, pv} from '../../../styles/misc/defaults';
import {text} from '../../../styles/theme/text';

class Home extends Component {
  render() {
    return (
      <View style={landing.main}>
        <View style={[misc.kont_nav, ph(20), pv(20)]}>
          <Text
            style={[
              text.white,
              text.regular,
              text.center,
              text.h3,
              {fontWeight: 'bold'},
            ]}>
            LOGOUT
          </Text>
        </View>

        <View style={[landing.bodyContainer]}>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/sad.png')}
              style={[landing.imageLogo]}
            />
          </View>
          <View style={[landing.buttonContainer]}>
            <View>
              <Text style={[text.center]}>You are logging out</Text>
              <Text style={[text.center]}>Are you sure?</Text>
            </View>
            <TouchableOpacity
              style={[
                landing.emailIcon,
                landing.button,
                {justifyContent: 'center'},
              ]}
              onPress={() => {
                this.props.navigation.navigate('SignUp');
              }}>
              <Text style={[landing.buttonText, text.white, text.semiBold]}>
                No, Keep me logged In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                landing.button,
                landing,
                landing.borderButton,
                {justifyContent: 'center'},
              ]}
              onPress={() => {
                this.props.navigation.navigate('Landing');
              }}>
              <Text style={[landing.buttonText, text.secondary, text.semiBold]}>
                Yes I'm sure
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.5}} />
        </View>
      </View>
    );
  }
}

export default Home;
