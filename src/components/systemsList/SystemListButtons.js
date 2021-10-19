import React from 'react';
import { FlatList } from 'react-native';
import { SYSTEM_BUTTONS } from '../../mocks/systemListMocks';
import SystemButton from '../button/SystemButton';

const SystemListButtons = () => {
    const renderButton = ({ item, index }) => (
        <SystemButton title={item} key={index} />
    );

    return (
        <FlatList 
            data={SYSTEM_BUTTONS}
            renderItem={renderButton}
        />
    );
}

export default SystemListButtons;