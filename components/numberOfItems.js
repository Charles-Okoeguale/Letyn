import { StyleSheet, View, Dimensions } from 'react-native';
import Textfield from './textfield';
import { useFonts } from 'expo-font';
import CustomButton from './button';

const { width, height } = Dimensions.get('window');

const NumberOfItems = ({ placeholder, type, style }) => {
    let [fontsLoaded, fontError] = useFonts({
        'Bold': require("../assets/fonts/SpaceGrotesk-Bold.ttf"),
        'Light': require("../assets/fonts/SpaceGrotesk-Light.ttf"),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={[styles.body, style]}>
            <View style={[styles.main, { height: height * 0.1 }]}>
                <Textfield
                    containerStyle={[styles.containerStyle, { width: width * 0.45 }]}
                    placeholder={placeholder}
                    textColor={'#FFFFFF'}
                    placeholderTextColor={'#FFFFFF'}
                    inputStyle={styles.inputStyle}
                    inputContainerStyle={styles.inputContainerStyle}
                    secureTextEntry={false}
                    iconColor={'#ACACAC'}
                    iconSize={20}
                />
                <View style={styles.checkbox}>
                    <CustomButton iconName={'plus'} buttonColor={'#FFFFFF'} iconSize={20} style={styles.button} width={70}/>
                    {type === 'List' && (
                        <Textfield
                            containerStyle={styles.containerStyle2}
                            textColor={'#FFFFFF'}
                            placeholderTextColor={'#FFFFFF'}
                            inputStyle={styles.inputStyle}
                            inputContainerStyle={styles.inputContainerStyle}
                            secureTextEntry={false}
                        />
                    )}
                    <CustomButton iconName={'minus'} buttonColor={'#FFFFFF'} iconSize={20} style={styles.button}  width={70}/>
                </View>
            </View>
        </View>
    )
}

export default NumberOfItems;

const styles = StyleSheet.create({
    containerStyle: {
        borderRadius: 10,
        height: 50,
        backgroundColor: '#1D1C1C',
        alignSelf: 'center',
    },

    containerStyle2: {
        width: 60,
        borderRadius: 10,
        height: 50,
        backgroundColor: '#000000',
        alignSelf: 'center',
        borderColor: '#292525',
        borderWidth: 1,
    },
    body: {
        width: '99%',
        gap: 1,
        height: 70,
        backgroundColor: '#000000',
        borderColor: '#292525',
        borderWidth: 1,
        justifyContent: 'center'
    },
    inputContainerStyle: {
        borderBottomColor: null,
        borderBottomWidth: 0,
        paddingTop: 2,
        fontSize: 14,
    },
    inputStyle: {
        color: 'white',
        fontFamily: 'Light',
        textAlign: 'center'
    },
    checkbox: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000',
        gap: 10
    },
    button: {
        alignItems: 'center',
    },
    main: {
        width: '99%',
        flexDirection: 'row',
        gap: 0,
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 5
    }
});
