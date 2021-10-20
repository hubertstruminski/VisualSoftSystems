import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { 
    DATE_LABELS_COLOR, 
    ERROR_COLOR, 
    OPERATIONS_COLOR, 
    SYSTEM_LABELS_COLOR, 
    WARNINGS_COLOR, 
    WHITE_COLOR 
} from '../../constants/colors';
import { 
    hp, 
    wp 
} from '../../tools/layoutTools';

export default StyleSheet.create({
    systemLabel: {
        marginLeft: wp(15),
        fontSize: RFValue(33, 1000),
        color: WHITE_COLOR,
        textAlign: 'left',
        fontFamily: 'Lato-Regular',
    },
    domainLabel: {
        marginLeft: wp(13),
        color: SYSTEM_LABELS_COLOR,
        fontSize: RFValue(14, 1000),
        textAlign: 'left',
        fontFamily: 'Lato-Regular',
    },
    responseTimeValue: {
        fontSize: RFValue(25, 1000),
        color: SYSTEM_LABELS_COLOR,
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
    },
    responseTimeLabel: {
        fontSize: RFValue(11, 1000),
        color: SYSTEM_LABELS_COLOR,
        fontFamily: 'Lato-Regular',
    },
    bigNumber: {
        fontSize: RFValue(33, 1000),
        textAlign: 'center',
        fontFamily: 'Lato-Regular',
    },
    errorColor: {
        color: ERROR_COLOR,
    },
    warningsColor: {
        color: WARNINGS_COLOR,
    },
    operationsColor: {
        color: OPERATIONS_COLOR,
    },
    mediumNumber: {
        fontSize: RFValue(15, 1000),
        fontFamily: 'Lato-Regular',
    },
    smallNumber: {
        fontSize: RFValue(11, 1000),
        fontFamily: 'Lato-Regular',
    },
    dateLabels: {
        fontSize: RFValue(11, 1000),
        color: DATE_LABELS_COLOR,
        fontFamily: 'Lato-Regular',
    },
    rightDateSpace: {
        marginRight: wp(14),
    },
    labelBottomSpace: {
        marginBottom: hp(13),
    },
});