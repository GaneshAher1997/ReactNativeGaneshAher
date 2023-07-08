import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const UseStateHook = () => {
    const [name,setName]=useState('Ganesh')
    const UpdateValue =()=>{
        setName('Ganesh Aher')
    }

  return (
    <View>
        <Text>UseStateHook</Text>
        <Text>{name}</Text>
        <Button title='click on me' onPress={UpdateValue} color={'teal'} />


    </View>
  )
}

export default UseStateHook