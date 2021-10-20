import { StyleSheet } from 'react-native';
import { wp } from '../../tools/layoutTools';

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
    leftDateSpace: {
        marginLeft: wp(13),
    },
});