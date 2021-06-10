import React from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5
    },
    leftContent:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    itemText:{
        fontSize: 16,
        marginLeft: 15,
        maxWidth: '80%'
    },
    circle:{
        width: 12,
        height: 12,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#55BCF6',
        borderRadius: 5
    }
})