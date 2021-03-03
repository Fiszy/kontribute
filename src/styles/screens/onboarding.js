import {StyleSheet, Dimensions,Platform} from 'react-native';
import { colors } from '../misc/settings';


const {height } = Dimensions.get('window');

export const onboarding = StyleSheet.create({
    container:{

        flex:1,
         alignItems: 'center',
},
    // image:{
    //     height: 250,
    // },
    main:{
        flex: 1,
        backgroundColor: colors.white,

    },
    image:{
         marginHorizontal:50,
         marginVertical: 30,
         resizeMode:'contain',
         flex: 0.5,

    },
    lowerBox:{
        alignItems: 'center',
        height: height *0.50,
        borderRadius: 20,
        backgroundColor: "#F2F2F9",
        marginHorizontal:15,
        position: 'absolute',
        bottom: 20,
        zIndex: -1,
    },
    title: {
        fontSize: 28,
        flex:0.2,
        fontWeight: '600',
    },

    text:{
        fontFamily:'Muli-Regular',
        marginHorizontal:30,
        textAlign: 'center',
        fontSize: 14,
        flex:0.5,
        marginTop: 50,


    },
    getStarted:{
        backgroundColor: '#73989B',
        paddingHorizontal: 40,
        paddingVertical:11,
        borderRadius: 5,
        position: 'absolute',
        bottom: 70,
        alignItems:'center'

    },


    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 4,
        flex:0,

    },


});
