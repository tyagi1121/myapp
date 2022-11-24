import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, TouchableHighlight, TouchableOpacity, Linking } from 'react-native';
import styles from './Books.style';
// import * as user from '../data.json'
import Data from './data.json';
export default function Details() {

    console.log('DEEEEEE====>', Data)

    return (

        <ScrollView>

            {Data && Data.map(data => {
                return (
                    <View key={data.id}>
                        <Text>{data.age}</Text>
                        <Text>{data.city}</Text>
                    </View>
                )
            })}
        </ScrollView>

    );
} 