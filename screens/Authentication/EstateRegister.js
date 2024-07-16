import { StyleSheet, Text, SafeAreaView, KeyboardAvoidingView, Dimensions } from 'react-native';
import { calculateEm, calculateFontsize, calculatePercentageDimension, screenWidth } from '../../helpers';
import Form from '../../components/form';
import { useForm } from '../../Context/FormContext';

const EstateRegister = ({ navigation }) => {

  const { estateRegister, setEstateRegister } = useForm();

  const handleButtonClick = () => {
    const { estateName, country, state, city } = estateRegister;
    if (!estateName.trim()) {
        alert('Please enter the estate name');
        return;
    }
    if (!country.trim()) {
        alert('Please enter the country');
        return;
    }
    if (!state.trim()) {
        alert('Please enter the state');
        return;
    }
    if (!city.trim()) {
        alert('Please enter the city');
        return;
    }
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
          // data={estateRegister}
          // setData={setEstateRegister}
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


