import { StyleSheet, View, StatusBar, ScrollView } from 'react-native';
import ResidenceInfo from '../../components/residenceInfo';
import Header from '../../components/header';
import Textfield from '../../components/textfield';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='auto'/>
      <Header/>
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
        <ResidenceInfo/>
      </ScrollView>
    </View>
  )
}

export default HomeScreen;

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
  }
});
