import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ERROR_COLOR, OPERATIONS_COLOR, WARNINGS_COLOR } from '../../constants/colors';
import { wp } from '../../tools/layoutTools';

export default StyleSheet.create({
    dataContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    dataRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    bigNumber: {
        fontSize: RFValue(33, 1000),
        textAlign: 'center',
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
    },
    smallNumber: {
        fontSize: RFValue(11, 1000),
    },
    leftNumberSpace: {
        marginLeft: wp(14),
    },
    rightNumberSpace: {
        marginRight: wp(17),
    },
});