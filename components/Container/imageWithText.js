import React from 'react';
import { View, Image, Text } from 'react-native';

const ImageWithTwoText = ({ imageUrl, text1, text2 }) => {
    return (
        <View style={{
            width: '100%',
            backgroundColor: '#333333',
            height: 200,
            borderRadius: 20,
            marginBottom: 50,
            alignItems: 'center',
        }}>
            <Image
                source={{ uri: imageUrl }}
                style={{ width: '100%', height: '70%', borderRadius: 20 }}
                resizeMode="cover"
            />
            <Text style={{ color: 'white', fontSize: 18, marginTop: 10, fontFamily: 'Bold' }}>{text1}</Text>
            <Text style={{ color: 'white', fontSize: 14, marginTop: 5, fontFamily: 'Light' }}>{text2}</Text>
        </View>
    );
};

export default ImageWithTwoText;
