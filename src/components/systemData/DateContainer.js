import React from 'react';
import { View, Text } from 'react-native';
import styles from './dateContainerStyle';

const DateContainer = () => {
    return (
        <View style={styles.titleContainer}>
            <View style={[styles.dateContainer, styles.leftDateSpace]}>
                <Text style={[styles.dateLabels, styles.labelBottomSpace]}>Last error: 2020-07-05 18:15:01</Text>
                <Text style={styles.dateLabels}>Daily error count: 15</Text>
            </View>
            <Text style={[styles.dateLabels, styles.rightDateSpace]}>Since last sync: 1 min 29 sec</Text>
        </View>
    );
}

export default DateContainer;