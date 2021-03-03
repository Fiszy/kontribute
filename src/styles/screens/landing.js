import {StyleSheet} from 'react-native';
import {colors} from '../misc/settings';

export const landing = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bodyContainer: {
    flex: 1,
  },
  imageLogo: {
    resizeMode: 'contain',
    width: 300,
    alignSelf: 'center',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flex: 1.5,
    paddingVertical: 30,
  },
  googleButton: {
    backgroundColor: '#F44D4D',
  },
  fbButton: {
    backgroundColor: '#3B5998',
  },
    emailIcon: {
        backgroundColor: colors.primary,
    },
  buttonIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight:'bold'
  },
  button: {
    marginHorizontal: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    height: 60,
  },

  borderButton:{
    borderColor: colors.secondary,
    borderWidth: 1,
  }
});
