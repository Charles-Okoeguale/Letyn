import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { calculatePercentageDimension } from '../../helpers';
import Form from '../../components/form';


const marginTop2 = calculatePercentageDimension(200, 932)

const EstateLogin = ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate('VerifyPhoneNumber');
  };
    return (
      <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <Text style={styles.text}>Login estate account</Text>
        <Form 
          estateName={true} 
          country={true} 
          state={true} 
          city={true} 
          // password={true} 
          onSubmit={handleButtonClick}
          type={'Register'}
          text={'Dont have an account?'}
          buttonText={'Continue'}
        />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 25,
      fontFamily: 'Bold',
      alignSelf: 'center',
      marginTop: marginTop2,
    },
  });
  
  export default EstateLogin;


