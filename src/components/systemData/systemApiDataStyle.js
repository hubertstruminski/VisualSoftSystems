import { StyleSheet } from 'react-native';
import { SYSTEM_BUTTON_BACKGROUND_COLOR } from '../../constants/colors';
import { 
    hp, 
    wp 
} from '../../tools/layoutTools';

export default StyleSheet.create({
    container: {
        width: wp(468),
        height: hp(242),
        backgroundColor: SYSTEM_BUTTON_BACKGROUND_COLOR,
        marginTop: hp(36),
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: hp(21),
    },
});