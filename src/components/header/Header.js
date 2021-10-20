import React from 'react';
import { 
    View, 
    TouchableWithoutFeedback, 
    Text 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../header/headerStyle';
import BackArrow from '../../../assets/icons/backArrow.svg';

const Header = ({ 
    navigation: { 
        goBack,
    }, 
    title,
}) => {
    return (
        <TouchableWithoutFeedback onPress={() => goBack()}>
            <View style={styles.container}>
                <BackArrow />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default withNavigation(Header);