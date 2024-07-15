import { StyleSheet, SafeAreaView, Text } from 'react-native';
import OptionContainer from '../../components/Container/optionContainer';
import { calculateEm, calculateFontsize, screenWidth } from '../../helpers';

const ContinueScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.body}>
        <Text style={styles.text}>Continue as</Text>
        <OptionContainer 
          iconColor={'#FFFFFF'} 
          iconSize={70} 
          iconName={'home'} 
          text1={'Estate'} 
          text2={'Register or login as an estate or community.'} 
          style={{marginTop: calculateEm(65), alignSelf: 'center'}}
          onPress={() => navigation.navigate("EstateRegister")}
        />
        <OptionContainer 
          iconColor={'#FFFFFF'} 
          iconSize={70} 
          iconName={'address-card'} 
          text1={'Resident'} 
          text2={'Login as a resident using access code provided by estate account.'} 
          style={{marginTop: calculateEm(41), alignSelf: 'center', position: 'relative'}}
          onPress={() => navigation.navigate("")}
        />
        </SafeAreaView>
    )
}

export default ContinueScreen;

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: 'black',
    },
    text: {
        color: '#FFFFFF',
        alignSelf: 'center',
        marginTop: calculateEm(82),
        fontFamily: 'Bold',
        fontSize: calculateFontsize(25, screenWidth)
    }
});