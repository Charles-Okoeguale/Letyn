import { Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Button } from '@rneui/themed';

const CustomButton = (
    { 
        text, 
        iconName, 
        style, 
        iconColor, 
        iconSize, 
        textColor, 
        onClick, 
        fontSize,
        fontFamily
    }) => {
    return (
        <Button onPress={onClick} buttonStyle={style}>
            {text && <Text style={[{color: textColor, fontSize: fontSize, fontFamily: fontFamily}]}>{text}</Text>}
            {iconName && <FontAwesome name={iconName} style={[{color: iconColor, fontSize: iconSize }]} />}
        </Button>
    );
};


export default CustomButton;
