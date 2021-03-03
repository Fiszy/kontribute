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

class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                email: "",
            },

        }

    }
    handleOnTextChange(field, input) {
        let form = Object.assign({}, this.state.form);
        form[field] = input;
        this.setState({form});
    }

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
                        Forget Password
                    </Text>
                </View>

                <View style={[mh(30), mt(50)]}>
                    <Text style={[text.regular, text.center]}>
                        Enter your email address associated
                        with this account or
                        phone number
                    </Text>


                    <View style={[mt(20)]}>
                        <CustomInput keyboardType="email-address" placeholder="Email"                   onChangeText={this.handleOnTextChange.bind(this, 'email')}/>
                    </View>


                    <TouchableOpacity
                        onPress = {()=> {
                            var form = Object.assign({}, this.state.form);
                            this.props.navigation.navigate('PasswordOtp', {email: form.email});
                        }}
                        style={[misc.space_row, landing.emailIcon, login.button, mt(50)]}>
                        <Text style={[landing.buttonText, text.white, text.semiBold]} >
                            Send Reset Link
                        </Text>

                        <Image
                            source={require('../../../assets/arrow.png')}
                            style={[landing.buttonIcon]}
                        />
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default ForgotPassword;
