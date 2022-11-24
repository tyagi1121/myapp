import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, TouchableHighlight, TouchableOpacity, Linking } from 'react-native';
import styles from './Books.style';


export default function Books() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.itbook.store/1.0/search/mongodb')
            .then((res) => res.json())
            .then((res) => setData(res.books))




    },[])
    console.log('books',data)
    return (

        <ScrollView>
            {
                data.map((item, index) => (
                    <View key={index} style={styles.bookcontainer}>

                        <View style={styles.bookimg} >
                            <Image style={{ width: 140, height: 150 }} source={{ uri: item.image }} />
                        </View>


                        <View style={styles.details}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                            <Text style={styles.price}>Price: {item.price}</Text>
                            <Text style={styles.btn} ><Button title='Read  More' onPress={ ()=> Linking.openURL(item.url) }/></Text>
                        </View>



                    </View>
                ))
            }
        </ScrollView>

    );
} 