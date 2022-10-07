import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  StyleSheet,
  useColorScheme,
  View,
  Button,
  Image,
  SectionList,
  TouchableOpacity,
} from 'react-native';



export default function Home({navigation}) {
  const [category, setCategory] = useState([
    { 'name': 'Books' },
    { 'name': 'Calculator' },
    { 'name': 'About us' },
    { 'name': 'More' },
    { 'name': 'Deepak' },
    { 'name': 'Contect us' }])

  return (
    <SafeAreaView >

      <ScrollView>

        <View>

          <View style={styles.horiContainer}>
            <ScrollView horizontal style={styles.carousel}>
              {category.map((item, index) => (
                <View key={index} style={styles.cattitle}>
                  <Text style={styles.cattext}>{item.name}</Text>
                </View>
              ))

              }

            </ScrollView>
          </View>

          <View style={styles.imgcontainer}>
            <Image source={require('./assets/picture.jpg')}  />
          </View>
          <View>
            <View style={styles.btn}>
              <Button
                title="Students Details"
                onPress={() => navigation.navigate('Profile')}
              />
            </View>


            <View style={styles.btn}>
              <Button
                title="Calculator"
                onPress={() => navigation.navigate('Calculator')}
              />
            </View>


            <View style={styles.btn}>
              <Button
                title="Choose Books"
                onPress={() => navigation.navigate('Books')}
              />
            </View>

            <View style={styles.btn}>
              <Button
                title="About Us"
                onPress={() => navigation.navigate('About Us')}
              />
            </View>
          </View>




        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  horiContainer: {
    marginTop: 20,
    height: 40

  },
  cattitle: {
    //height: 45,
    //width: '15%',
    //textAlign: 'right',
   // textAlignVertical: 'center',
    //padding: 5,
    justifyContent: 'center',
    alignItems: 'center',

  },

  cattext: {
    height: 35,
    width: 120,
    //justifyContent: 'center',
   // alignItems: 'center',
    textAlign: 'center',
   textAlignVertical: 'center',
    margin: 5,
    backgroundColor: 'red',
    color: 'black',
    fontSize: 20,
    borderRadius: 10,

  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },

  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  btn: {
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
    alignContent: 'center',
  },
  imgcontainer: {
    justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        height: 400,
        margin: 10,

  },
  
});