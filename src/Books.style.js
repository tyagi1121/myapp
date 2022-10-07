import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    bookcontainer: {
        backgroundColor: 'white',
        margin: 5,
        flex: 1,
        flexDirection: 'row',
       // height: 'a',
        
    },
    bookimg: {
        flex: 1,
        textAlign: 'center',
        backgroundColor: '#DEDEDE',
        marginLeft: 5,
        marginRight: 10,
        justifyContent: 'center',
        alignItems:'center',
        height: 190
    },
    details: {
        flex: 2,
        flexDirection: 'column',
        margin: 5,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
        color: 'black',
        textAlign: 'left',

    },
    subtitle: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
    },

    price:{
        fontSize: 25,
        color: 'black',
        textAlign: 'left',
    },
    btn:{
        marginTop: 10,
        marginBottom: 10,
    }


});
