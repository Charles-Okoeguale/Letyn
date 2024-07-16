import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Textfield from './textfield';
import CustomButton from './button';
import { calculatePercentageDimension } from '../helpers';

const marginTop1 = calculatePercentageDimension(150, 932)
const TextMarginBottom = calculatePercentageDimension(40, 932)
const marginTop2 = calculatePercentageDimension(200, 932)
const marginTop3 = calculatePercentageDimension(100, 932)
const marginTop4 = calculatePercentageDimension(10, 932)
const { width: screenWidth } = Dimensions.get('window');

const Form = ({ 
    data,
    setData,
    navigation, 
    estateName, 
    country, 
    state, 
    city, 
    password, 
    type, 
    text, 
    phoneNumber, 
    code, 
    buttonText, 
    onSubmit, 
    HandlePress }) => {

    const [otp, setOtp] = useState(Array(4).fill(''));
    const inputRefs = useRef([]);

    // const handleOnChange = (index, value) => {
    //     const newOtp = [...otp];
    //     newOtp[index] = value;
    //     setOtp(newOtp);
    //     if (value && index < numInputs - 1) {
    //       inputRefs.current[index + 1].focus();
    //     }
    // };

    return (
        <View style={styles.form}>
            {estateName && (
                <Textfield
                data={data}
                setData={setData}
                value={data.estateName}
                type={'estateName'}
                containerStyle={styles.containerStyle}
                placeholder={'Enter estate name'}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
            />
            )}
            {country && (
                <Textfield
                data={data}
                setData={setData}
                value={data.country}
                type={'country'}
                containerStyle={styles.containerStyle}
                placeholder={'Enter country'}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
             />
            )}
            {state && (
                <Textfield
                data={data}
                setData={setData}
                type={'state'}
                value={data.state}
                containerStyle={styles.containerStyle}
                placeholder={'Enter state'}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
            />
            )}
            {city && (
                <Textfield
                value={data.city}
                data={data}
                setData={setData}
                type={'city'}
                containerStyle={styles.containerStyle}
                placeholder={'Enter city/town'}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
            />
            )}
            {password && (
                 <Textfield
                 data={data}
                 setData={setData}
                 type={'password'}
                 value={data.password}
                 containerStyle={styles.containerStyle}
                 placeholder={'Enter password'}
                 textColor={'#FFFFFF'}
                 placeholderTextColor={'#FFFFFF'}
                 inputStyle={styles.inputStyle}
                 inputContainerStyle={styles.inputContainerStyle}
                 secureTextEntry={true}
                 rightIcon={'eye'}
                 iconColor={'#FFFFFF'}
                 iconSize={20}
             />
            )}
            {code && (
                <>
                <View style={styles.otp}>
                    {otp.map((digit, index) => (
                           <Textfield
                           data={data}
                           setData={setData}
                           type={'otp'}
                           value={data.otp}
                           containerStyle={styles.input}
                           textColor={'#FFFFFF'}
                           placeholderTextColor={'#FFFFFF'}
                           inputStyle={styles.inputStyle}
                           inputContainerStyle={styles.inputContainerStyle}
                           secureTextEntry={false}
                       />
                    ))}
                </View>
                <Text style={[styles.text, {fontSize: 15, fontFamily: 'Bold', marginBottom: marginTop3, marginTop: marginTop4 }]}>
                    Resend otp
                </Text>
                </>
            )}
            {phoneNumber && (
                <Textfield
                data={data}
                setData={setData}
                type={'phoneNumber'}
                value={data.phoneNumber}
                containerStyle={styles.containerStyle}
                placeholder={'Enter phone number'}
                textColor={'#FFFFFF'}
                placeholderTextColor={'#FFFFFF'}
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
            />
            )}
            <CustomButton
                text={buttonText}
                fontFamily={'Bold'}
                fontSize={20}
                style={styles.button}
                onClick={onSubmit}
            />
            <Text style={[styles.text, { marginTop: calculatePercentageDimension(20, 932), fontSize: 13, fontFamily: 'Light' }]}>
                {text}
                <TouchableWithoutFeedback onPress={HandlePress}>
                    <Text style={{ color: 'white', fontFamily: 'Bold' }}>
                        {' '}{type}
                    </Text>
                </TouchableWithoutFeedback>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 0.3,
        borderColor: 'white',
        borderRadius: 5,
        width: 50,
        height: 45,
        margin: 5,
        textAlign: 'center',
        fontSize: 16,
        backgroundColor: '#1D1C1C'
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Bold',
        alignSelf: 'center',
        marginTop: marginTop2,
    },
    form: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: marginTop1,
    },
    containerStyle: {
        width: screenWidth * 0.95,
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: '#1D1C1C',
        marginBottom: 10,
    },
    inputContainerStyle: {
        borderBottomWidth: 0,
        paddingTop: 7,
    },
    inputStyle: {
        color: 'white',
        fontFamily: 'Light',
        paddingTop: 15,
        paddingLeft: 10,
        fontSize: 15
    },
    button: {
        width: screenWidth * 0.95, 
        height: 77, 
        alignSelf: 'center',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginTop: TextMarginBottom
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Form;
