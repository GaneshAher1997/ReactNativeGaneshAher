import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const IputboxHere = () => {
    const [values,setvalues]=useState('')
  return (
    <View>
        <Text style={styles.name}> My Name is : {values}</Text>
        
        <TextInput
        placeholder='write here'
        style={styles.InputBox}
        value={values}
        onChangeText={(abc)=>setvalues(abc)}
        
        />
         {/* it button use for when we click on it clear the inputText */}

        <Button title='Clear InputText value' onPress={()=>{setvalues(' ')}}/>

        </View>
  )
}

export default IputboxHere;

const styles= StyleSheet.create({
    InputBox:{
        borderWidth:2,
        borderColor:'blue',
        padding:10,
        margin:5,
        width:'100%',
        height:40,
        marginLeft:50,
        
    },
   
}
    
)