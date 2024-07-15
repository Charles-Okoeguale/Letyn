import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
// import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@rneui/themed';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { useFonts } from 'expo-font';

const Header = () => {
    let [fontsLoaded, fontError] = useFonts({
        'SpaceGrotesk-Bold' : require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'SpaceGrotesk-Light' : require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <SafeAreaView style={styles.header}>
            <View style={{flexDirection: 'row', gap: 10}}>
                <View style={{justifyContent: 'center'}}>
                    <Text style={styles.Esname}>Suncity Estate</Text>
                    <Text style={styles.Eslocation}>Lokogoma, Abuja</Text>
                </View>
            </View>
            <Avatar
                size={40}
                rounded
                containerStyle={{ backgroundColor: "#333333" }}
            />
        </SafeAreaView>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        height: '10%', 
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#3D3C3A',
        borderBottomWidth: 0.5,
      },
      Esname: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'SpaceGrotesk-Bold'
      },
      Eslocation: {
        color: 'white',
        fontFamily: 'SpaceGrotesk-Light'
      }
});