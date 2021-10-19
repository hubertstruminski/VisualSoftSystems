import React, { useEffect, useRef, useState } from 'react';
import { View, AppState } from 'react-native';
import { withNavigation } from 'react-navigation';
import DateContainer from './DateContainer';
import NumberDataContainer from './NumberDataContainer';
import styles from './systemApiDataStyle';
import SystemTitle from './SystemTitle';
import { fetchMonitoringData } from '../axios/actions/visualSoftApi';

const SystemApiData = ({ navigation }) => {
    const [data, setData] = useState({});
    const interval = useRef();

    useEffect(() => {
        fetchData();
        AppState.addEventListener('change', handleAppStateChange);

        const focusListener = navigation.addListener("didFocus", fetchDataWithIntervals);
        return () => {
            if(interval?.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
            AppState.removeEventListener('change', handleAppStateChange);
            focusListener.remove();
        }
    }, []);

    useEffect(() => {
        if(data) {
            fetchDataWithIntervals();
        }
    }, [data]);

    const handleAppStateChange = (nextState) => {
        if (nextState === 'active') {
            fetchDataWithIntervals();
        } else {
            if(interval.current) {
                clearInterval(interval.current);
                interval.current = null;
            }
        }
    };

    const fetchData = async () => {
        const response = await fetchMonitoringData();
        console.log("@@@@ responseTime: " + new Date());
        console.log(response?.data);
        setData(response?.data);
    }

    const fetchDataWithIntervals = () => {
        if(!interval.current) {
            fetchData();
            interval.current = setInterval(() => {
                fetchData();
            }, 20000);
        }
    }

    return (
        <View style={styles.container}>
            <SystemTitle />
            <NumberDataContainer />
            <DateContainer />
        </View>
    );
}

export default  withNavigation(SystemApiData);