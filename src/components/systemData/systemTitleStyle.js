import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SYSTEM_LABELS_COLOR, WHITE_COLOR } from '../../constants/colors';
import { hp, wp } from '../../tools/layoutTools';

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
    },
    systemLabel: {
        marginLeft: wp(15),
        fontSize: RFValue(33, 1000),
        color: WHITE_COLOR,
        textAlign: 'left',
    },
    domainLabel: {
        marginLeft: wp(13),
        color: SYSTEM_LABELS_COLOR,
        fontSize: RFValue(14, 1000),
        textAlign: 'left',
    },
    responseTimeValue: {
        marginRight: wp(26),
        fontSize: RFValue(25, 1000),
        color: SYSTEM_LABELS_COLOR,
        textAlign: 'center',
    },
    responseTimeLabel: {
        marginRight: wp(12),
        fontSize: RFValue(11, 1000),
        color: SYSTEM_LABELS_COLOR,
    },
});