import React from 'react';
import { View, Text } from 'react-native';
import styles from './systemTitleStyle';

const SystemTitle = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.systemNameContainer}>
                <Text style={styles.systemLabel}>NAZWA SYSTEMU</Text>
                <Text style={styles.domainLabel}>adressystemu.domena.pl</Text>
            </View>
            <View style={styles.responseTimeContainer}>
                <Text style={styles.responseTimeValue}>150ms</Text>
                <Text style={styles.responseTimeLabel}>Average response time</Text>
            </View>
        </View>
    );
}

export default SystemTitle;