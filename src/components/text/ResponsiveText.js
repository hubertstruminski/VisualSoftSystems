import React from 'react';
import { Text } from 'react-native';
import styles from './responsiveTextStyle';

const ResponsiveText = ({ 
    style, 
    isStatusColor, 
    children, 
    style2
}) => {
    return (
        <Text style={[styles[style], styles[style2], isStatusColor]}>
           {children} 
        </Text>
    );
}

export default ResponsiveText;