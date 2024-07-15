import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image} from 'react-native';

const logoImage = require("../assets/-high-resolution-logo-transparent.png")

const VerificationScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={logoImage} style={{ width: 110, height: 110}}/>
            <StatusBar style="auto" />
        </View>
    )
}

export default VerificationScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
});