import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {landing} from '../../../styles/screens/landing';
import {misc, ph, pv} from '../../../styles/misc/defaults';
import {text} from '../../../styles/theme/text';

class Landing extends Component {
  render() {
    return (
      <View style={landing.main}>
        <View style={[misc.kont_nav, misc.space_row, ph(20), pv(20)]}>
          <View />
          <Text style={[text.white, text.regular]} onPress={()=> {
              this.props.navigation.navigate('Login');
          }}>LOGIN</Text>
        </View>

        <View style={[landing.bodyContainer]}>
          <View style={{flex: 2, justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/big_logo.png')}
              style={[landing.imageLogo]}
            />
          </View>
          <View style={[landing.buttonContainer]}>

              <TouchableOpacity style={[misc.space_row, landing.googleButton, landing.button]}
              onPress={()=> {
                  this.props.navigation.navigate('Home');
              }}
              >

                  <Text style={[landing.buttonText,text.white, text.semiBold]}>SIGN IN WITH GOOGLE</Text>

                  <Image source={require('../../../assets/google_icon.png')} style={[landing.buttonIcon]}/>


              </TouchableOpacity>
              <TouchableOpacity style={[misc.space_row, landing.fbButton, landing.button]}          onPress={()=> {
                  this.props.navigation.navigate('Home');
              }}>

                  <Text style={[landing.buttonText, text.white, text.semiBold]}>SIGN UP WITH FACEEBOOK</Text>

                  <Image source={require('../../../assets/fb_icon.png')} style={[landing.buttonIcon]}/>


              </TouchableOpacity>
              <TouchableOpacity style={[misc.space_row, landing.emailIcon, landing.button]} onPress={()=> {
                  this.props.navigation.navigate('SignUp');
              }}>

                  <Text style={[landing.buttonText, text.white, text.semiBold]}>SIGN UP WITH EMAIL</Text>

                  <Image source={require('../../../assets/arrow.png')} style={[landing.buttonIcon]}/>


              </TouchableOpacity>

          </View>
            <View style={{flex: 0.5}}/>
        </View>
      </View>
    );
  }
}

export default Landing;
