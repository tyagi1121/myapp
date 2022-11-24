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
                <DataTable.Header style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}>
                    <DataTable.Title style={{
                        flex: 1, 
                        borderRightWidth: 1,
                        borderRightColor: 'black',
                        paddingLeft: 5
                    }}>
                        <Text style={styles.title}>Id</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{
                        flex: 5, 
                        borderRightWidth: 2,
                        borderRightColor: 'black',
                        paddingLeft: 5
                    }}>
                        <Text style={styles.title}>Name</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{
                        flex: 6, 
                        borderRightWidth: 1,
                        borderRightColor: 'black',
                        paddingLeft: 5
                    }}>
                        <Text style={styles.title}>Email Address</Text>
                    </DataTable.Title>
                    <DataTable.Title style={{
                        flex: 3,
                        paddingLeft: 5
                    }}>
                        <Text style={styles.title}>City</Text>
                    </DataTable.Title>
                    {/* <DataTable.Title>Age</DataTable.Title>
                    
                    <DataTable.Title>Contact No.</DataTable.Title> */}
                </DataTable.Header>

                {Data && Data.map(data => {
                    return (

                        <DataTable.Row style={{
                            borderBottomWidth: 1, borderBottomColor: 'black',
                            }}>
                            <DataTable.Cell style={{ flex: 1,
                            paddingLeft: 5,
                            borderRightWidth: 1,
                            borderRightColor: 'black',
                             }}>
                                <Text style={styles.cell}>{data.id}</Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{ flex: 5,
                            paddingLeft: 5,
                            borderRightWidth: 1,
                            borderRightColor: 'black',
                             }}>
                                <Text style={styles.cell}>{data.firstName} {data.lastName}</Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{ flex: 6,
                            paddingLeft: 5,
                            borderRightWidth: 1,
                            borderRightColor: 'black',
                             }}>
                                <Text style={styles.cell}>{data.email}</Text>
                            </DataTable.Cell>
                            <DataTable.Cell style={{ flex: 3,
                             paddingLeft: 5, 
                             }}>

                                <Text style={styles.cell}>{data.city}</Text>
                            </DataTable.Cell>
                            {/* <DataTable.Cell>{data.age}</DataTable.Cell>
                            
                            <DataTable.Cell>{data.phoneNumber}</DataTable.Cell> */}
                        </DataTable.Row>

                    )
                })}
            </DataTable>
        </ScrollView>

    );
} 