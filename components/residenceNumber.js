import React from 'react';
import { View, ScrollView } from 'react-native';
import Container from './Container/container';


const NumberGrid = ({length, logic, gap, backgroundColor, borderColor}) => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            <ScrollView vertical>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: gap, alignItems: 'center', justifyContent: 'center' }}>
                    {Array.from({ length: length }).map((item, index) => (
                        <Container
                            key={index}
                            text={index + 1} 
                            iconColor={'#FFFFFF'} 
                            fontSize={25}
                            style={{ marginLeft: 5, width: 68, height: 63, backgroundColor: backgroundColor, borderColor: borderColor}}
                        /> 
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default NumberGrid;
