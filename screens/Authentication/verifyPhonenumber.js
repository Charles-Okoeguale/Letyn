import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from '@rneui/themed';
import Form from '../../components/form';
import { calculatePercentageDimension } from '../../helpers';
import { useState } from 'react';

const marginTop2 = calculatePercentageDimension(200, 932)
const gap = calculatePercentageDimension(30, 932)

const VerifyPhoneNumber = () => {
    const [codesent, setCodesent] = useState(false)
    const SendCode = () => {
        console.log('code sent')
        setCodesent(true)
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Verify your number</Text>
                <Form code={true} phoneNumber={true} buttonText={codesent ? 'Verify code' : 'Send code'} onSubmit={SendCode}/>
        </SafeAreaView>
    )
}

export default VerifyPhoneNumber;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      gap: gap
    },
    otp: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
});