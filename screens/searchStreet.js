import { StyleSheet, View, StatusBar, ScrollView, Text } from 'react-native';
import Textfield from '../components/textfield';
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from '../components/Container/container';
import CustomButton from '../components/button';
import StreetList from '../components/streetList';


const SearchStreet = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'/>
      <Container
        text={null} 
        iconColor={'#FFFFFF'} 
        iconSize={30} 
        iconName={'angle-left'} 
        style={{marginLeft: 5, width: 68, height: 63}}
      /> 
       <Text style={styles.text}>Suncity Estate</Text>
       <Text style={styles.text}>Lokogoma, Abuja.</Text>
      <ScrollView 
        contentContainerStyle={styles.contentContainerStyle}
        style={{flex: 1}}>
        <Textfield
          containerStyle={styles.containerStyle}
          placeholder={'Search for residence'} 
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
        <CustomButton 
            buttonColor={'#FFFFFF'} 
            fontSize={14} 
            text={'Add street'} 
            style={{
                width: 100, 
                height: 50, 
                marginTop: 20, 
                alignSelf: 'flex-end',
            }}
        />
        <StreetList text1={'Phone number'} text2={'House no'}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchStreet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: '10%', 
    flexDirection: 'row', 
    paddingLeft: 10, 
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#3D3C3A',
    borderBottomWidth: 0.5
  },
  Esname: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  Eslocation: {
    color: 'white'
  },
  containerStyle: {
    width: 400, 
    borderRadius: 10, 
    borderWidth: 2, 
    backgroundColor: '#1D1C1C',
    alignSelf: 'center',
    marginTop: 25
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
  },
  text: {
    color: 'white', 
    fontSize: 25, 
    alignSelf: 'center',
    fontFamily: 'Bold'
},
});
