import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {login} from '../../../styles/screens/login';
import {mb, mh, misc, mr, mt, ph, pv} from '../../../styles/misc/defaults';
import {text} from '../../../styles/theme/text';
import CustomInput from '../_partials/CustomInput';
import {landing} from '../../../styles/screens/landing';
import CodeInput from 'react-native-confirmation-code-input';
import {colors} from '../../../styles/misc/settings';
import CustomBorderInput from '../_partials/CustomBorderInput';

class PasswordOtp extends Component {
  constructor() {
    super();
    this.state = {
      done: false,
      code: '',
    };
  }
  _onFulfill(code) {
    this.setState({
      code,
      done: true,
    });
  }
  render() {
    const email = this.props.route.params?.email ?? '';
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
            Forget Password
          </Text>
        </View>

        <View style={[mh(30), mt(50)]}>
          <Text style={[text.regular, text.center, mb(20)]}>
            Enter the code sent to {email}
          </Text>

          {/*<View style={[mt(20)]}>*/}
          {/*    <CustomInput keyboardType="email-address" placeholder="Email" />*/}
          {/*</View>*/}
          <CodeInput
            ref="codeInputRef1"
            codeLength={6}
            space={20}
            compareWithCode={null}
            activeColor={colors.white}
            inactiveColor={colors.primary}
            autoFocus={true}
            ignoreCase={true}
            inputPosition="center"
            size={45}
            containerStyle={{marginTop: 0}}
            codeInputStyle={[
              login.codeInput,
              {borderWidth: 0, backgroundColor: colors.primary},
            ]}
            onFulfill={(code) => this._onFulfill(code)}
          />

          <Text style={[mt(60)]}>Resend Code</Text>

          {this.state.done && (
            <View>
              <View style={[mt(20)]}>
                <CustomBorderInput
                  placeholder="********"
                  secureTextEntry={true}
                  label={'New Password'}
                />
              </View>

              <View style={[mt(20)]}>
                <CustomBorderInput
                  placeholder="********"
                  secureTextEntry={true}
                  label={'Confirm Password'}
                />
              </View>

              <TouchableOpacity
                style={[
                  landing.emailIcon,
                  login.button,
                  mt(50),
                  mr(0),
                  {justifyContent: 'center'},
                ]}>
                <Text style={[landing.buttonText, text.white, text.semiBold]}>
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default PasswordOtp;
