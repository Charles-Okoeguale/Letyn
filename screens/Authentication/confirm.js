import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import CustomButton from '../../components/button';
import Textfield from '../../components/textfield';

const ConfirmPassword = () => {
    let [fontsLoaded, fontError] = useFonts({
        'Bold' : require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'Light' : require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }


    return (
        <>
            <Text style={styles.text}>Confirm password</Text>
            <View style={styles.form}>
             <Textfield
                containerStyle={[styles.containerStyle, {marginTop: 35}]}
                placeholder={'Confirm password'} 
                textColor={'#FFFFFF'} 
                placeholderTextColor={'#FFFFFF'} 
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={true}
                rightIcon={'eye'}
                iconColor={'#ACACAC'}
                iconSize={20}
                rightIconContainerStyle={styles.rightIconContainerStyle} 
            />
            <CustomButton text={'Continue'} style={{width: 388, height: 77, marginTop: 90, alignSelf: 'center'}}/>
        </View>
        </>
    )
}

export default ConfirmPassword;

const styles = StyleSheet.create({
    form: {
        gap: 5, 
        width: '100%', 
        alignItems: 'center', 
        marginTop: 50
    },
    text: {
        color: 'white', 
        fontSize: 25, 
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'Bold'
    },
    containerStyle: {
        width: 400, 
        borderRadius: 10, 
        borderWidth: 2, 
        backgroundColor: '#1D1C1C'
    },
    inputContainerStyle: {
        borderBottomColor: null, 
        borderBottomWidth: 0, 
        paddingTop: 7,
        fontSize: 14, 
    },
    inputStyle: {
        color: 'white', 
        fontFamily: 'Light', 
        paddingTop: 15, 
        paddingLeft: 10
    },
    rightIconContainerStyle: {
        paddingTop: 15,
        paddingLeft: 10
    }
});