import { StyleSheet, View, SafeAreaView, ScrollView, Text } from 'react-native';
import ProfileCard from '../../components/Cards/profileCard';
import Container from '../../components/Container/container';
import CustomButton from '../../components/button';
import { useFonts } from 'expo-font';
import ImageWithTwoText from '../../components/Container/imageWithText';

const list = [ 
    {name: "Residences", icon: 'building'},
    {name: "Subscription Plan", icon: 'google-wallet'},
    {name: "Payments", icon: 'credit-card-alt'},
    {name: "Settings", icon: 'cog'},
]

const MainProfileScreen = () => {
    let [fontsLoaded, fontError] = useFonts({
        'Bold' : require("../../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'Light' : require("../../assets/fonts/SpaceGrotesk-Light.ttf"),
    });
    
    if (!fontsLoaded && !fontError) {
    return null;
    }
    return (
        <SafeAreaView style={styles.container}>
            <Container text={null} iconColor={'#FFFFFF'} iconSize={30} iconName={'angle-left'} style={{marginLeft: 10, backgroundColor: '#1D1C1C'}}/>
            <ScrollView style={{ width: '100%', height: 500}}>
                <ImageWithTwoText
                    imageUrl="https://example.com/image.jpg" // Provide your image URL here
                    text1="Suncity Estate"
                    text2="Galadimawa, Abuja."
                />
                <View style={{
                    width: '100%',
                    height: 550,
                    borderRadius: 20,
                    paddingTop: 10,
                    paddingHorizontal: 5,
                    gap: 10,
                    alignItems: 'center'
                }}>
                    <Text style={{color: 'white', paddingLeft: 13, fontWeight: 900, alignSelf: 'end', fontFamily: 'Bold'}}>Account</Text>
                    {list.map((item, index) => (
                        <ProfileCard name={item.name} iconName={item.icon} key={index}/>
                    ))}
                <CustomButton textColor={'#C72643'} text={'Log Out'} buttonColor={'#000000'} style={{width: 150, height: 50, alignSelf: 'center', marginTop: 30}}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MainProfileScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      gap: 20
    },
});