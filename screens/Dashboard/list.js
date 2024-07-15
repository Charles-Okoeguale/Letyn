import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Textfield from '../../components/textfield';
import CustomModal from '../../components/modal';
import { useState } from 'react';
import CustomTable from '../../components/customTable';
import ItemListScreen from '../itemList';

const name2 = [
    ['Charles Okoeguale', '09134954970', '9:00PM', ''],
    ['Charles Okoeguale', '09134954970', '9:00PM', ''],
]
const tableHead = ['Name', 'Phone number'];
const widthArr = [300, 135]; 

const tableHead2 = ['Item name', 'No of item(s)'];
const widthArr2 = [300, 135]; 
const name3 = [
    ['Television', '5'],
    ['Television', '5'],
]

const ListScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleRowClick = (index) => {
        console.log(`Row ${index} clicked`);
        setModalVisible(true)
    };
    const handlePress = () => {
        setModalVisible(false)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Visitors list</Text>
            <Textfield
                containerStyle={styles.containerStyle}
                placeholder={'Search for visitor'} 
                textColor={'#FFFFFF'} 
                placeholderTextColor={'#FFFFFF'} 
                inputStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                secureTextEntry={false}
                rightIcon={'search'}
                rightIconContainerStyle={styles.rightIconContainerStyle} 
                iconColor={'#ACACAC'}
                iconSize={20}
            />
            <ScrollView style={{width: '100%'}}>
            <CustomTable
                tableHead={tableHead}
                tableData={name2}
                widthArr={widthArr}
                handlePress={handlePress}
                handleRowClick={handleRowClick}
            />
            </ScrollView>
            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
            <ItemListScreen
                tableHead={tableHead2}
                tableData={name3}
                widthArr={widthArr2}
                handlePress={handlePress}
                handleRowClick={handleRowClick}
            />
            </CustomModal>
        </View>
    )
}

export default ListScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      gap: 30
    },
    containerStyle: {
        width: 400, 
        borderRadius: 10, 
        borderWidth: 2, 
        backgroundColor: '#1D1C1C',
        alignSelf: 'center',
        marginTop: 25
      },
      inputContainerStyle: {
          borderBottomColor: null, 
          borderBottomWidth: 0, 
          paddingTop: 7,
          fontSize: 14, 
      },
      inputStyle: {
          color: 'white', 
          fontFamily: 'Light', 
          paddingTop: 15, 
          paddingLeft: 10
      },
      rightIconContainerStyle: {
          paddingTop: 15,
          paddingLeft: 10
      },
});