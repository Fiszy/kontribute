import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {landing} from '../../../styles/screens/landing';
import {mh, misc, mt, ph, pv} from '../../../styles/misc/defaults';
import {text} from '../../../styles/theme/text';
import CustomInput from '../_partials/CustomInput';
import {login} from '../../../styles/screens/login';

class SignUp extends Component {
  state = {
    showPassword: true,
  };
  toggleShow() {
    console.log('hello');
    this.setState({
      showPassword: !this.state.showPassword,
    });
  }
  render() {
    const {showPassword} = this.state;
    return (
      <View style={login.main}>
        <View style={[misc.kont_nav, ph(20), pv(20)]}>
          <Text
            style={[
              text.white,
              text.regular,
              text.center,
              text.h3,
              {fontWeight: 'bold'},
            ]}>
            CREATE ACCOUNT
          </Text>
        </View>

        <ScrollView style={[mh(30), mt(50)]}>
          <Text style={[text.description]}>
            Manage all of your contributions in one place
          </Text>
          <View style={[mt(20)]}>
            <CustomInput keyboardType="default" placeholder="Name" />
          </View>

          <View style={[mt(20)]}>
            <CustomInput keyboardType="email-address" placeholder="Email" />
          </View>
          <View style={[mt(20)]}>
            <CustomInput keyboardType="phone-pad" placeholder="Phone Number" />
          </View>
          <View style={[mt(20)]}>
            <View style={[misc.space_row, text.textElevated]}>
              <TextInput
                placeholder={'Password'}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  console.log('ss');
                  this.toggleShow();
                }}>
                <Image source={require('../../../assets/eye.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[mt(20)]}>
            <View style={[misc.space_row, text.textElevated]}>
              <TextInput
                placeholder={'Confirm Password'}
                secureTextEntry={showPassword}
              />
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => {
                  console.log('ss');
                  this.toggleShow();
                }}>
                <Image source={require('../../../assets/eye.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[misc.space_row, landing.emailIcon, login.button, mt(50)]}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={[landing.buttonText, text.white, text.semiBold]}>
              SIGN UP WITH EMAIL
            </Text>

            <Image
              source={require('../../../assets/arrow.png')}
              style={[landing.buttonIcon]}
            />
          </TouchableOpacity>

          <Text
            style={[text.regular, mt(50)]}
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            Already have an account? Login Here
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default SignUp;
