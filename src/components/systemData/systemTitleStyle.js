import { StyleSheet } from 'react-native';
import { 
    hp, 
    wp 
} from '../../tools/layoutTools';

export default StyleSheet.create({
    titleContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    systemNameContainer: {
        marginTop: hp(14),
    },
    responseTimeContainer: {
        marginTop: hp(15),
        alignItems: 'center',
        marginRight: wp(12),
    },
});