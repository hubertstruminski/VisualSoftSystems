import React from 'react';
import { StatusBar} from 'react-native';
import styles from './systemsListStyle';
import LinearGradient from "react-native-linear-gradient";
import { 
    DARK_GRADIENT_COLOR, 
    LIGHT_GRADIENT_COLOR 
} from '../../constants/colors';
import SystemListButtons from '../../components/systemsList/SystemListButtons';

const SystemsList = () => {
    return (
        <LinearGradient
            colors={[LIGHT_GRADIENT_COLOR, DARK_GRADIENT_COLOR]}
            style={styles.container}
        >
            <StatusBar translucent backgroundColor="transparent" />
            <SystemListButtons />
        </LinearGradient>
    );
}

export default SystemsList;