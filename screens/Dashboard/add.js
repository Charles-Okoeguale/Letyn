import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import Visitors from '../../components/visitors';
import CustomButton from '../../components/button';
import NumberOfItems from '../../components/numberOfItems';
import CustomModal from '../../components/modal';
import AddItems from '../addItems';

const AddScreen = () => {
    const [novisitors, setNovisitors] = useState([1,2,3])
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
           <Text style={styles.text}>Add visitor(s)</Text>
           <NumberOfItems placeholder={'Number of visitors'}/>
           <View style={{ height: '85%', width: '100%', paddingTop: '5%', alignItems: 'center', gap: 10 }}>
            {novisitors.map(() => <Visitors setModalVisible={setModalVisible}/>)}
            <CustomButton text={'Add'} buttonColor={'#FFFFFF'} style={{width: 388, height: 77, marginTop: 90, alignSelf: 'center'}}/>
           </View>
            <CustomModal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <AddItems setModalVisible={setModalVisible}/>
            </CustomModal>
        </View>
    )
}

export default AddScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      gap: 20
    },
    text: {
        color: 'white', 
        fontSize: 25, 
        alignSelf: 'center',
        marginTop: 50,
        fontFamily: 'Bold'
    },
});