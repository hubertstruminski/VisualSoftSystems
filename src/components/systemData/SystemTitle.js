import React, { 
    useEffect, 
    useState 
} from 'react';
import { View } from 'react-native';
import { 
    ERROR_COLOR, 
    SYSTEM_LABELS_COLOR, 
    WARNINGS_COLOR 
} from '../../constants/colors';
import { AVERAGE_RESPONSE_TIME_LABEL } from '../../constants/labels';
import ResponsiveText from '../text/ResponsiveText';
import styles from './systemTitleStyle';

const SystemTitle = ({
    systemTitle,
    avgResponseWarningLimit,
    avgResponseAlertLimit,
    avgResponseTime,
    url,
}) => {
    const [isWarning, setIsWarning] = useState(false);
    const [isAlert, setIsAlert] = useState(false);

    useEffect(() => {
        if(avgResponseTime) {
            if(avgResponseTime >= avgResponseWarningLimit && avgResponseTime < avgResponseAlertLimit) {
                setIsWarning(true);
                setIsAlert(false);
            } else if(avgResponseTime >= avgResponseAlertLimit) {
                setIsAlert(true);
                setIsWarning(false);
            } else {
                setIsAlert(false);
                setIsWarning(false);
            }
        }
    }, [avgResponseTime]);

    const isStatusColorText = {
        color: isWarning ? 
        WARNINGS_COLOR : (
            isAlert ? ERROR_COLOR : SYSTEM_LABELS_COLOR
        )
    };

    return (
        <View style={styles.titleContainer}>
            <View style={styles.systemNameContainer}>
                <ResponsiveText style="systemLabel">
                    {systemTitle}    
                </ResponsiveText>
                <ResponsiveText style="domainLabel">
                    {url}
                </ResponsiveText>
            </View>
            <View style={styles.responseTimeContainer}>
                <ResponsiveText 
                    style="responseTimeValue"
                    isStatusColor={isStatusColorText}
                >
                    {`${avgResponseTime}ms`}
                </ResponsiveText>
                <ResponsiveText 
                    style="responseTimeLabel"
                    isStatusColor={isStatusColorText}
                >
                    {AVERAGE_RESPONSE_TIME_LABEL}
                </ResponsiveText>
            </View>
        </View>
    );
}

export default SystemTitle;