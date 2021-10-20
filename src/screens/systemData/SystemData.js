import React from 'react';
import { StatusBar } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import Header from '../../components/header/Header';
import SystemApiData from '../../components/systemData/SystemApiData';
import { 
    DARK_GRADIENT_COLOR, 
    LIGHT_GRADIENT_COLOR 
} from '../../constants/colors';
import styles from '../systemsList/systemsListStyle';

const SystemData = ({ 
    navigation: { 
        getParam, 
    },
}) => {
    return (
        <LinearGradient
            colors={[LIGHT_GRADIENT_COLOR, DARK_GRADIENT_COLOR]}
            style={styles.container}
        >
            <StatusBar translucent backgroundColor="transparent" />
            <Header title={getParam('title')} />
            <SystemApiData />
        </LinearGradient>
    );
}

export default SystemData;