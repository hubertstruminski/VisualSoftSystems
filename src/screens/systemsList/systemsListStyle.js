import { 
    Platform, 
    StyleSheet 
} from 'react-native';
import { hp } from '../../tools/layoutTools';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: Platform.OS === 'ios' ? hp(50) : hp(80),
    },
});