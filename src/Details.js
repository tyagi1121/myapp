import React, { Component, useEffect, useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, TouchableHighlight, TouchableOpacity, Linking } from 'react-native';
import { DataTable } from 'react-native-paper';
import Data from './data.json';
import styles from './Details.style';
export default function Details() {

    // console.log('DEEEEEE====>', Data)

    return (

        <ScrollView>
            <DataTable style={styles.container}>
                <View style={{ margin: 10, borderWidth: 1, borderColor: 'black' }}>
                    <View style={{ backgroundColor: 'yellow',alignItems: 'center', }}>
                        
                        <DataTable.Header style={{ borderBottomWidth: 1, borderBottomColor: 'black'}}>
                            <Text style={[styles.titletext, { flex: 1,}]}>
                                <DataTable.Title style={{justifyContent:'center',flexDireaction:'row'  } }>
                                    <Text style={styles.title}>Id</Text>
                                </DataTable.Title>
                            </Text>
                            <Text style={[styles.titletext, { flex: 5, }]}>
                                <DataTable.Title>
                                    <Text style={styles.title}>Name</Text>
                                </DataTable.Title>
                            </Text>
                            <Text style={[styles.titletext, { flex: 5,}]}>
                                <DataTable.Title>
                                    <Text style={styles.title}>Email Address</Text>
                                </DataTable.Title>
                            </Text>
                            <Text style={{ flex: 3,justifyContent:'center',flexDireaction:'row'  }}>
                                <DataTable.Title>
                                    <Text style={styles.title}>City</Text>
                                </DataTable.Title>
                            </Text>
                        </DataTable.Header>
                       
                    </View>

                    {Data && Data.map(data => {
                        return (

                            <DataTable.Row style={{
                                borderBottomWidth: 1, borderBottomColor: 'black',
                            }}>
                                <DataTable.Cell style={{
                                    flex: 1,

                                    borderRightWidth: 1,
                                    borderRightColor: 'black',
                                    justifyContent:'center',
                                    flexDireaction:'row' 
                                }}>
                                    <Text style={styles.cell}>{data.id}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{
                                    flex: 5,

                                    borderRightWidth: 1,
                                    borderRightColor: 'black',
                                    justifyContent:'center',
                                    flexDireaction:'row' 
                                }}>
                                    <Text style={styles.cell}>{data.firstName} {data.lastName}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{
                                    flex: 5,
                                    justifyContent:'center',
                                    flexDireaction:'row',
                                    borderRightWidth: 1,
                                    borderRightColor: 'black',
                                }}>
                                    <Text style={styles.cell}>{data.email}</Text>
                                </DataTable.Cell>
                                <DataTable.Cell style={{
                                    flex: 3,
                                    justifyContent:'center',
                                    flexDireaction:'row' 
                                }}>

                                    <Text style={styles.cell}>{data.city}</Text>
                                </DataTable.Cell>

                            </DataTable.Row>

                        )
                    })}
                </View>
            </DataTable>
        </ScrollView>

    );
} 