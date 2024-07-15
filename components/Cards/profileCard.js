import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Container from '../Container/container';

const ProfileCard = ({name, iconName}) => {
    return (
        <View style={{
            width: 400, 
            backgroundColor: '#000000',
            flexDirection: 'row',
            gap: 30,
            height: 75,
            alignItems: 'center',
            paddingLeft: 5,
            borderRadius: 10,
            borderColor: '#292525',
            borderWidth: 1
        }}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={20} 
                iconName={iconName} 
                style={{
                    backgroundColor: '#000000',
                }}
            />
            <Text style={{color: 'white', fontWeight: 400, fontSize: 15, fontFamily: 'Bold'}}>
                {name}
            </Text>
        </View>
    );
};

const styles = {
    
};

export default ProfileCard;
