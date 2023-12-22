import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import PrimaryBtn from '../../components/primaryBtn'


const LoginScreen = ({ navigation }) => {
  return (
    <View style={{flex: 1, backgroundColor: "#101010"}}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 25}}>
          <PrimaryBtn text={"Vissza"} handlePress={() => navigation.goBack()}/>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default LoginScreen