import React, { 
    useEffect, 
    useState 
} from 'react';
import { 
    View, 
    Text 
} from 'react-native';
import { 
    ERRORS_LAST_HOUR_LABEL, 
    OPERATIONS_LAST_HOUR_LABEL, 
    WARNINGS_LAST_HOUR_LABEL 
} from '../../constants/labels';
import ResponsiveText from '../text/ResponsiveText';
import styles from './numberDataContainerStyle';

const NumberDataContainer = ({
    errors,
    warnings,
    operations,
}) => {
    const [errorsLastHour, setErrorsLastHour] = useState(0);
    const [warningsLastHour, setWarningsLastHour] = useState(0);
    const [operationsLastHour, setOperationsLastHour] = useState(0);
    const [avgErrors, setAvgErrors] = useState(0);
    const [avgWarnings, setAvgWarnings] = useState(0);

    useEffect(() => {
        setErrorsLastHour(errors?.[0]?.Value);
        setWarningsLastHour(warnings?.[0]?.Value);
        setOperationsLastHour(operations?.[0]?.Value);

        findAverageValue(errors ? errors : [], setAvgErrors);
        findAverageValue(warnings ? warnings : [], setAvgWarnings);
    }, [errors, warnings, operations]);

    const findAverageValue = (array, setState) => {
        let sum = 0;
        array.forEach(element => {
            sum += element?.Value;
        });
        setState(Math.round(sum / array.length));
    }

    return (
        <View style={styles.dataRowContainer}>
            <View style={[styles.dataContainer, styles.leftNumberSpace]}>
                <ResponsiveText style="errorColor" style2="bigNumber">
                    {errorsLastHour}
                </ResponsiveText>
                <ResponsiveText style="errorColor" style2="mediumNumber">
                    ({avgErrors})
                </ResponsiveText>
                <ResponsiveText style="errorColor" style2="smallNumber">
                    {ERRORS_LAST_HOUR_LABEL}
                </ResponsiveText>
            </View>
            <View style={styles.dataContainer}>
                <ResponsiveText style="warningsColor" style2="bigNumber">
                    {warningsLastHour}
                </ResponsiveText>
                <ResponsiveText style="warningsColor" style2="mediumNumber">
                    ({avgWarnings})
                </ResponsiveText>
                <ResponsiveText style="warningsColor" style2="smallNumber">
                    {WARNINGS_LAST_HOUR_LABEL}
                </ResponsiveText>
            </View>
            <View style={[styles.dataContainer, styles.rightNumberSpace]}>
                <ResponsiveText style="operationsColor" style2="bigNumber">
                    {operationsLastHour}
                </ResponsiveText>
                <Text></Text>
                <ResponsiveText style="operationsColor" style2="smallNumber">
                    {OPERATIONS_LAST_HOUR_LABEL}
                </ResponsiveText>
            </View>
        </View>
    );
}

export default NumberDataContainer;