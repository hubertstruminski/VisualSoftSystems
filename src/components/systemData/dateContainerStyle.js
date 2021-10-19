import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DATE_LABELS_COLOR } from '../../constants/colors';
import { hp, wp } from '../../tools/layoutTools';

export default StyleSheet.create({
    titleContainer: {
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    dateContainer: {
        flexDirection: 'column',
    },
    dateLabels: {
        fontSize: RFValue(11, 1000),
        color: DATE_LABELS_COLOR,
    },
    leftDateSpace: {
        marginLeft: wp(13),
    },
    rightDateSpace: {
        marginRight: wp(14),
    },
    labelBottomSpace: {
        marginBottom: hp(13),
    },
});