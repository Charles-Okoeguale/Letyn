import { Input} from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons'; 

const Textfield = (
    {
        placeholder, 
        placeholderTextColor, 
        textColor, 
        containerStyle, 
        inputStyle, 
        inputContainerStyle, 
        secureTextEntry,
        rightIconContainerStyle,
        rightIcon,
        iconColor,
        iconSize,
        type,
        value,
        data,
        setData
    }) => {

        const handleChange = (field, text) => {
            setData({ ...data, [field]: text });
        };

    return (
        <>
            <Input 
                value={value}
                containerStyle={containerStyle}
                placeholder={placeholder} 
                textColor={textColor} 
                placeholderTextColor={placeholderTextColor} 
                inputStyle={inputStyle}
                inputContainerStyle={inputContainerStyle}
                secureTextEntry={secureTextEntry}
                onChangeText={(text) => handleChange(type, text)}
                rightIcon={<FontAwesome name={rightIcon} style={{color: iconColor, fontSize: iconSize }} />}
                rightIconContainerStyle={rightIconContainerStyle} 
            />
        </>
    )
    
}

export default Textfield;