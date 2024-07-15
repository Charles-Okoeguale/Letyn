import { StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import CustomButton from '../components/button';
import { View } from 'react-native';
import { calculateEm, calculateFontsize, calculatePercentageDimension, screenWidth } from '../helpers';

const WelcomeScreen = ({ navigation }) => {
    return (
      <ImageBackground
        source={require('../assets/welcome.jpg')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.overlay}>
          <View>
            <Text style={styles.text1}>Welcome to</Text>
            <Text style={styles.text2}>Letyn</Text>
            <Text style={styles.text1}>
              Join estates and residents who use Letyn to manage homes and pre-register visitors.
            </Text>
          </View>
          <View style={{justifyContent: 'flex-end'}}>
            <CustomButton 
              text={'Continue'} 
              fontFamily={'Bold'} 
              fontSize={20} 
              style={styles.button} 
              onClick={() => navigation.navigate("Continue")}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    ) 
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  button: {
    width: calculatePercentageDimension(400, 430), 
    height: calculateEm(77), 
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#FFFFFF'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'fit',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.90)',
    justifyContent: 'space-between',
  },
  text1: {
    color: 'white',
    fontFamily: 'Light',
    paddingLeft: calculateEm(24),
    paddingTop: calculateEm(112),
    adjustsFontSizeToFit: true, 
    minimumFontScale: 0.5, 
    fontSize: calculateFontsize(36, screenWidth)
  },
  text2: {
    color: 'white',
    fontFamily: 'Bold',
    paddingLeft: calculateEm(24),
    fontSize: calculateFontsize(64, screenWidth),
    adjustsFontSizeToFit: true,
    minimumFontScale: 0.5,
  },
});
