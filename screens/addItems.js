import { StyleSheet, View, Text } from 'react-native';
import NumberOfItems from '../components/numberOfItems';
import Container from '../components/Container/container';
import CustomButton from '../components/button';

const AddItems = ({setModalVisible}) => {
    const handlePress = () => {
        setModalVisible(false)
    };
    return (
        <View style={styles.container}>
        <Container 
            text={null} 
            iconColor={'#FFFFFF'} 
            iconSize={30} 
            iconName={'angle-down'} 
            style={{marginLeft: 5, width: 68, height: 63}}
            onClick={handlePress}
        />
        <Text style={styles.text}>Add Item(s)</Text>
        <NumberOfItems placeholder={'Number of items'} type={'Set'}/>
        <View style={{marginTop: 30}}>
            {[1,2,3,4]. map((item, index) => (
                <NumberOfItems placeholder={'Name of item'} key={index} type={'List'}/>
            ))}
        </View>
        <View style={{flexDirection: 'row', height: 80, justifyContent: 'flex-end', gap: 15}}>
            <CustomButton text={'Cancel'} textColor={'#FFFFFF'} buttonColor={'#000000'} style={{width: 108, height: 60}} onClick={handlePress}/>
            <CustomButton text={'Add'} buttonColor={'#FFFFFF'} style={{width: 108, height: 60}} onClick={handlePress}/>
        </View>
        </View>
    )
}

export default AddItems;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      width: '100%',
      gap: 30
    },
    text: {
        color: 'white', 
        fontSize: 20, 
        alignSelf: 'center',
        fontFamily: 'Bold'
    },
});
