import React, { 
    useEffect, 
    useRef, 
    useState 
} from 'react';
import { View } from 'react-native';
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
        const focusListener = navigation.addListener("didFocus", fetchDataWithIntervals);
        
        return () => {
            clearMonitoringDataInterval();
            focusListener.remove();
        }
    }, []);

    useEffect(() => data && fetchDataWithIntervals(), [data]);

    const clearMonitoringDataInterval = () => {
        if(interval?.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
    }

    const fetchData = async () => {
        const response = await fetchMonitoringData();
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
            <SystemTitle 
                systemTitle={data?.Name}
                avgResponseWarningLimit={data?.AvgResponseTimeWarningLimit}
                avgResponseAlertLimit={data?.AvgResponseTimeAlertLimit}
                avgResponseTime={data?.AvgResponseTime}
                url={data?.Url}
            />
            <NumberDataContainer 
                errors={data?.Errors}
                warnings={data?.Warnings}
                operations={data?.Operations}
            />
            <DateContainer 
                lastErrorStr={data?.LastErrorStr}
                lastSync={data?.LastSync}
                dailyErrorCount={data?.DailyErrorCount}
            />
        </View>
    );
}

export default  withNavigation(SystemApiData);