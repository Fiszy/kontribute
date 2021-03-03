import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {onboarding} from '../../styles/screens/onboarding';
import {text} from '../../styles/theme/text';
import {colors} from '../../styles/misc/settings';
import {mt} from '../../styles/misc/defaults';

const slides = [
  {
    key: 1,
    title: 'Create Goals',
    text: 'Raise Money for your  Reunion\n' +
        'or a fun road trip',
    image: require('./../../assets/slide1.png'),
    backgroundColor: colors.primary,
  },
  {
    key: 2,
    title: 'Add People',
    text: 'Add as many people and delegate \n' +
        'amounts to be paid',
    image: require('./../../assets/slide2.png'),
    backgroundColor: colors.secondary,
  },
  {
    key: 3,
    title: 'Manage All Contributions',
    text: "Manage transactions  all in one place.\n" +
        "Transparency so everyone knows \n" +
        "what’s going on",
    image: require('./../../assets/slide3.png'),
    backgroundColor: colors.primaryLight,
  },
];

class Onboarding extends Component {
  state = {
    showRealApp: false,
  };
  _renderItem = ({item}) => {
    return (
      <View
        style={[
          onboarding.slide,
          {
            backgroundColor: item.backgroundColor,
          },
        ]}>
        <Text style={[onboarding.title, text.bold, text.white, mt(100)]}>{item.title}</Text>
        <Image source={item.image} style={onboarding.image} />

        <Text style={[onboarding.text, text.white]}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('Landing');
  };
  render() {
    if (this.state.showRealApp) {
      return <Text />;
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={slides}
          onDone={this._onDone}
        />
      );
    }
  }
}

export default Onboarding;


