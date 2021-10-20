import { StyleSheet } from 'react-native';
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
    
    leftNumberSpace: {
        marginLeft: wp(14),
    },
    rightNumberSpace: {
        marginRight: wp(17),
    },
});