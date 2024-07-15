import { Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export { screenWidth, screenHeight };

export function calculatePercentageDimension(dimension, fixed) {
    const percentage = (dimension / fixed) * 100;
    return percentage + '%';
}

export const calculateEm = (dimension) => {
    const result = dimension / 16
    return result * 16
}

export const calculateFontsize = (dimension, screenWidth) => {
    const result =  dimension/screenWidth
    return result * screenWidth
}