import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import Container from '../components/Container/container';
import NumberGrid from '../components/residenceNumber';
import Textfield from '../components/textfield';

const { width, height } = Dimensions.get('window');

const SearchHouseNumber = ({text1, text2}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Container
                text={null} 
                iconColor={'#FFFFFF'} 
                iconSize={30} 
                iconName={'angle-left'} 
                style={{marginLeft: 5, width: 68, height: 63}}
            /> 
            <Text style={styles.text}>Romford street</Text>
            <Textfield
                containerStyle={styles.containerStyle}
                placeholder={'Search house number'} 
                textColor={'#FFFFFF'} 
                placeholderTextColor={'#FFFFFF'} 
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
                rightIcon={'search'}
                rightIconContainerStyle={styles.rightIconContainerStyle} 
                iconColor={'#ACACAC'}
                iconSize={20}
                />
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 40, justifyContent: 'center' }}>
            <NumberGrid length={10}/>
            </View>
        </SafeAreaView>
    );
};

export default SearchHouseNumber;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
    },
    text: {
        color: 'white', 
        fontSize: 25, 
        alignSelf: 'center',
        fontFamily: 'Bold',
        marginTop: 40
    },
    containerStyle: {
        borderRadius: 10,
        height: 60,
        backgroundColor: '#1D1C1C',
        alignSelf: 'center',
        marginTop: 50
    },

    inputContainerStyle: {
        borderBottomColor: null,
        borderBottomWidth: 0,
        paddingTop: 5,
        fontSize: 14,
    },
    inputStyle: {
        color: 'white',
        fontFamily: 'Light',
        paddingLeft: 10
    },
  });
