import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    conteiner:{
        height: '100%'
    },
    title:{
        marginTop: 100,
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30
    },
    writeTaskWrapper:{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input:{
        margin: 15,
        padding: 15,
        width: 250,
        height: 45,
        backgroundColor: '#FFFFFF',
        textAlign: 'center',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    circle:{
        width: 60,
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 52,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 18,
        borderWidth: 1,
        borderColor: '#C0C0C0'
    },
    textButton:{
        color: '#C0C0C0',
        fontSize: 20
    }
})