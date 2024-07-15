import { Input} from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';

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
        onChangeText
    }) => {

        const [value, setValue] = useState('');

        const handleTextChange = (text) => {
            setValue(text);
            onChangeText(text); 
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
                onChangeText={handleTextChange}
                rightIcon={<FontAwesome name={rightIcon} style={{color: iconColor, fontSize: iconSize }} />}
                rightIconContainerStyle={rightIconContainerStyle} 
            />
        </>
    )
    
}

export default Textfield;