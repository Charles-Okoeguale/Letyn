import { StyleSheet, View, Text } from 'react-native';
import { CheckBox } from '@rneui/themed';
import { useState } from 'react';
import Textfield from './textfield';
import { useFonts } from 'expo-font';

const Visitors = ({setModalVisible}) => {
    let [fontsLoaded, fontError] = useFonts({
        'Bold' : require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'Light' : require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }

    const [checked, setChecked] = useState(true);
    const [selectedIndex, setIndex] = useState(0);
    const toggleCheckbox = () => setChecked(!checked);

    const openModal = () => {
        setChecked(1)
        setModalVisible(true)
    }
    return (
        <View style={styles.body}>
             <View style={{
                width: '99%', 
                flexDirection: 'row',  
                gap: 7,
                height: 60,
                alignItems: 'center',
                borderRadius: 10,
                paddingHorizontal: 5
            }}>
            <Textfield
                containerStyle={styles.containerStyle}
                placeholder={'Name'} 
                textColor={'#FFFFFF'} 
                placeholderTextColor={'#FFFFFF'} 
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
                iconColor={'#ACACAC'}
                iconSize={20}
            />
              <Textfield
                containerStyle={styles.containerStyle}
                placeholder={'Phone number'} 
                textColor={'#FFFFFF'} 
                placeholderTextColor={'#FFFFFF'} 
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
                iconColor={'#ACACAC'}
                iconSize={20}
            />
            <View style={styles.checkbox}>
                <Text style={{color: 'white', fontFamily: 'Bold'}}>
                    Item
                </Text>
                <CheckBox
                    checked={selectedIndex === 1}
                    onPress={() => openModal()}
                    checkedIcon="dot-circle-o"
                    uncheckedIcon="circle-o"
                    containerStyle={{
                        backgroundColor: '#000000',
                    }}
                    checkedColor='#FFFFFF'
                    uncheckedColor='#FFFFFF'
                />
                </View>
            </View>
        </View>
    )
}

export default Visitors;

const styles = StyleSheet.create({
    containerStyle: {
        width: '35%', 
        borderRadius: 10, 
        height: 50,
        backgroundColor: '#1D1C1C',
        alignSelf: 'center',
       
      },
      body: {
        width: '99%', 
        gap: 5, 
        height: 70, 
        backgroundColor: '#000000',
        borderColor: '#292525',
        borderWidth: 1,
        justifyContent: 'center'
      },
      inputContainerStyle: {
          borderBottomColor: null, 
          borderBottomWidth: 0, 
          paddingTop: 2,
          fontSize: 14, 
      },
      inputStyle: {
          color: 'white', 
          fontFamily: 'Light',  
      },
      checkbox: {
        marginLeft: 20, 
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: '#00000'
      }
});