import React from 'react';
import { View, Text } from 'react-native';
import styles from './numberDataContainerStyle';

const NumberDataContainer = () => {
    return (
        <View style={styles.dataRowContainer}>
            <View style={[styles.dataContainer, styles.leftNumberSpace]}>
                <Text style={[styles.errorColor, styles.bigNumber]}>3</Text>
                <Text style={[styles.errorColor, styles.mediumNumber]}>(5)</Text>
                <Text style={[styles.errorColor, styles.smallNumber]}>Errors in last hour</Text>
            </View>
            <View style={styles.dataContainer}>
                <Text style={[styles.warningsColor, styles.bigNumber]}>3</Text>
                <Text style={[styles.warningsColor, styles.mediumNumber]}>(21)</Text>
                <Text style={[styles.warningsColor, styles.smallNumber]}>Warnings in last hour</Text>
            </View>
            <View style={[styles.dataContainer, styles.rightNumberSpace]}>
                <Text style={[styles.operationsColor, styles.bigNumber]}>3</Text>
                <Text></Text>
                <Text style={[styles.operationsColor, styles.smallNumber]}>Operations in last hour</Text>
            </View>
        </View>
    );
}

export default NumberDataContainer;