import React from 'react'
import {View, StyleSheet} from 'react-native'

import HomePage from './src/pages/home/index'

export default function App(){
  return(
    <View style={styles.conteiner}>
      <HomePage />
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    backgroundColor: '#E8EAED',
    height: '100%'
  }
})