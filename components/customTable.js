import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';

const CustomTable = ({ tableHead, tableData, widthArr, handlePress, handleRowClick }) => {
    return (
        <View style={{flex: 1, height: '100%', backgroundColor: '#000000'}}>
            <Table borderStyle={{ borderWidth: 0}} style={{marginTop: 50}}>
                <Row
                    data={tableHead}
                    style={{
                        marginTop:  10
                    }}
                    widthArr={widthArr} 
                    textStyle={{ 
                        color: 'white', 
                        fontSize: 15, 
                        paddingLeft: 10,
                        fontFamily: 'Bold',
                    }}
                />
                {tableData.map((rowData, index) => (
                    <TouchableOpacity key={index} onPress={() => handleRowClick(index)}>
                        <Row
                            data={rowData}
                            style={styles.row}
                            widthArr={widthArr}
                            textStyle={styles.rowText} 
                        />
                    </TouchableOpacity>
                ))}
            </Table>
        </View>
    );
};

export default CustomTable;

const styles = StyleSheet.create({
      row: {
        backgroundColor: '#1D1C1C',
        borderColor: '#292525',
        borderRadius: 5,
        borderWidth: 0.2,
        marginTop:  5,
        height: 70,
        fontFamily: 'Light',
        
    },
    rowText: {
        color: 'white',
        fontSize: 15,
        paddingLeft: 10,
        fontFamily: 'Light',
    },
});