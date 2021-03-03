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

class Login extends Component {
  render() {
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
            LOGIN
          </Text>
        </View>

        <View style={[mh(30), mt(50)]}>
          <Text style={{fontWeight: 'bold', fontSize: 25}}>
            Hello, Welcome Back
          </Text>

          <View style={[mt(20)]}>
            <CustomInput keyboardType="email-address" placeholder="Email" />
          </View>
          <View style={[mt(20)]}>
            <CustomInput placeholder="Password" secureTextEntry={true} />
          </View>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
            style={[misc.space_row, landing.emailIcon, login.button, mt(50)]}>
            <Text style={[landing.buttonText, text.white, text.semiBold]}>
              LOGIN
            </Text>

            <Image
              source={require('../../../assets/arrow.png')}
              style={[landing.buttonIcon]}
            />
          </TouchableOpacity>
          <Text
            style={[text.regular, mt(50)]}
            onPress={() => {
              this.props.navigation.navigate('ForgotPassword');
            }}>
            Forgot Password
          </Text>

          <Text
            style={[text.regular, mt(20)]}
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            Dont Have an account? Sign up
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
