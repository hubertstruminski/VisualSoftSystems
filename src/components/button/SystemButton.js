import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './systemButtonStyle';

const SystemButton = ({ 
    title, 
    navigation: { navigate } 
}) => {
    return (
        <TouchableOpacity 
            onPress={() => navigate('SystemData', { title })}
            activeOpacity={0.5}
        >
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default withNavigation(SystemButton);