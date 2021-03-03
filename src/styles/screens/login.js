import {StyleSheet, Dimensions,Platform} from 'react-native';
import { colors } from '../misc/settings';


const {height } = Dimensions.get('window');

export const login = StyleSheet.create({

    main:{
        flex: 1,
        backgroundColor: '#f9fafb',

    },

    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginRight: 50,
        borderRadius: 5,
        height: 60,
    },



});
