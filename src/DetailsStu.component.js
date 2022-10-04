import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import styles from './DetailsStu.component.style';


export default function DetailsStu() {

    const [data] = useState([
        { 'name': 'Ben', 'id': 1 },
        { 'name': 'Susan', 'id': 2 },
        { 'name': 'Robert', 'id': 3 },
        { 'name': 'Mary', 'id': 4 },
        { 'name': 'Daniel', 'id': 5 },
        { 'name': 'Laura', 'id': 6 },
        { 'name': 'John', 'id': 7 },
        { 'name': 'Debra', 'id': 8 },
        { 'name': 'Aron', 'id': 9 },
        { 'name': 'Ann', 'id': 10 },
        { 'name': 'Steve', 'id': 11 },
        { 'name': 'Olivia', 'id': 12 }])
        ;
    return (

        <ScrollView>
            {
                data.map((item, index) => (
                    <View key={index} style={styles.item}>
                        
                            <View  style={styles.stu_details}>
                            <Text style={styles.itemText}>Name: {item.name} </Text>
                            <Text style={styles.itemTextid} >Id: {item.id} </Text>
                            </View>
                           
                            
                            
                    </View>
                ))
            }
        </ScrollView>

    );
} 