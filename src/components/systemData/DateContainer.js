import React, { 
    useEffect, 
    useRef, 
    useState 
} from 'react';
import { View } from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { cutStringToMilisecondsDate } from '../../tools/dateTools';
import styles from './dateContainerStyle';
import { 
    DAILY_ERROR_COUNT_LABEL, 
    LAST_ERROR_LABEL, 
    MINUTES_LABEL, 
    SECONDS_LABEL, 
    SINCE_LAST_SYNC_LABEL 
} from '../../constants/labels';
import ResponsiveText from '../text/ResponsiveText';

const DateContainer = ({
    lastErrorStr,
    lastSync,
    dailyErrorCount,
    navigation,
}) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const interval = useRef();

    useEffect(() => {
        const blurEvent = navigation.addListener('didBlur', clearTimerInterval);
        return () => blurEvent.remove();
    }, []);

    useEffect(() => {
        if(lastSync) {
            const lastSyncMiliseconds = cutStringToMilisecondsDate(lastSync);
            const lastSyncDate = moment(Number(lastSyncMiliseconds)).local();

            let diff = diff = Math.abs(new Date() - lastSyncDate);            
            computeTimeDurationFromLastSync(diff);
        }
    }, [lastSync]);

    const computeTimeDurationFromLastSync = (diff) => {
        if(!interval.current) {
            interval.current = setInterval(() => {
                diff += 1000;
                const durationFromLastSync = moment.duration(Number(diff));    
                setMinutes(durationFromLastSync.minutes());
                setSeconds(durationFromLastSync.seconds());  
            }, 1000);
        }
    }

    const clearTimerInterval = () => {
        if(interval?.current) {
            clearInterval(interval.current);
            interval.current = null;
        }
    }

    return (
        <View style={styles.titleContainer}>
            <View style={[styles.dateContainer, styles.leftDateSpace]}>
                <ResponsiveText style="dateLabels" style2="labelBottomSpace">
                    {LAST_ERROR_LABEL}: {lastErrorStr}
                </ResponsiveText>
                <ResponsiveText style="dateLabels">
                    {DAILY_ERROR_COUNT_LABEL}: {dailyErrorCount}
                </ResponsiveText>
            </View>
            <ResponsiveText style="dateLabels" style2="rightDateSpace">
                {SINCE_LAST_SYNC_LABEL}: {minutes} {MINUTES_LABEL} {seconds} {SECONDS_LABEL}
            </ResponsiveText>
        </View>
    );
}

export default withNavigation(DateContainer);