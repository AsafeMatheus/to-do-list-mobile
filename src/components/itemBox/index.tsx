import React from 'react'
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import styles from './style'

export default function(props:any){
    return(
        <View style={styles.conteiner}>
            <View style={styles.leftContent}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.itemText}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}