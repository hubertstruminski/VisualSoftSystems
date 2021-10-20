import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { WHITE_COLOR } from '../../constants/colors';
import { screenWidth, wp } from '../../tools/layoutTools';

export default StyleSheet.create({
    container: {
        width: screenWidth,
        paddingHorizontal: wp(25),
        alignItems: 'center',
        flexDirection: 'row',
    },
    title: {
        marginLeft: wp(25),
        color: WHITE_COLOR,
        fontSize: RFValue(18),
        fontFamily: 'Lato-Light',
    }
});