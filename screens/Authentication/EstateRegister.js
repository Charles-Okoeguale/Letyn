import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { calculateEm, calculateFontsize, calculatePercentageDimension, screenWidth } from '../../helpers';
import Form from '../../components/form';

const EstateRegister = ({ navigation }) => {
  const handleButtonClick = () => {
    navigation.navigate('VerifyPhoneNumber');
  };
 
    return (
      <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
        <KeyboardAvoidingView behavior='padding' style={{flex: 1}}>
        <Text style={styles.text}>Register estate account</Text>
        <Form 
          estateName={true} 
          country={true} 
          state={true} 
          city={true} 
          navigation={navigation}
          type={'Login'}
          text={'Already have an account?'}
          onSubmit={handleButtonClick}
          buttonText={'Continue'}
          HandlePress={() => navigation.navigate('EstateLogin')}
        />
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: calculateFontsize(25, screenWidth),
      fontFamily: 'Bold',
      alignSelf: 'center',
      marginTop: calculateEm(82),
    },
  });
  
  export default EstateRegister;


