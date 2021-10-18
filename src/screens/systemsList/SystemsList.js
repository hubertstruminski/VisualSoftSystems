import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import styles from './systemsListStyle';

const SystemsList = () => {
    return (
        <View style={styles.container}>
            <StatusBar translucent />
        </View>
    );
}

export default SystemsList;