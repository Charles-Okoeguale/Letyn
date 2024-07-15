import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { calculateEm, calculateFontsize, calculatePercentageDimension, screenWidth } from '../../helpers';

const OptionContainer = ({ text1, text2, iconName, style, iconColor, iconSize, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.main, style]}>
            <View style={styles.icon}>
            <FontAwesome name={iconName} style={[styles.icon, {color: iconColor, fontSize: iconSize }]} />
            </View>
            <View style={styles.description}>
                <Text style={styles.text1}>{text1}</Text>
                <Text style={styles.text2}>{text2}</Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default OptionContainer;

const styles = StyleSheet.create({
    main: {
        width: calculatePercentageDimension(382, 430),
        height: calculateEm(207),
        backgroundColor: '#000000',
        borderRadius: calculateEm(14),
        borderColor: 'white',
        borderWidth: 0.9,
       flexDirection: 'row'
    },
    description: {
        width: '55%',
        paddingTop: calculateEm(60),
        paddingRight: calculateEm(20)
    },
    icon: {
        width: '45%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text1: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: 'Bold',
        fontSize: calculateFontsize(25, screenWidth)
    },
    text2: {
        color: '#FFFFFF',
        fontWeight: 'normal',
        fontSize: 15,
        fontFamily: 'Light',
        marginTop: 10
    }
});