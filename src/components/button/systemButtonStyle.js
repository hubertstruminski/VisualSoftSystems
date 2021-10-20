import { StyleSheet } from 'react-native';
import { 
    SYSTEM_BUTTON_BACKGROUND_COLOR, 
    SYSTEM_BUTTON_BORDER_COLOR, 
    WHITE_COLOR 
} from '../../constants/colors';
import { RFValue } from "react-native-responsive-fontsize";
import { 
    hp, 
    wp 
} from '../../tools/layoutTools';

export default StyleSheet.create({
    container: {
        width: wp(440),
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(70),
        marginBottom: hp(18),
        backgroundColor: SYSTEM_BUTTON_BACKGROUND_COLOR,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: SYSTEM_BUTTON_BORDER_COLOR,
    },
    text: {
        color: WHITE_COLOR,
        fontSize: RFValue(18),
        fontFamily: 'Lato-Light',
    }
});