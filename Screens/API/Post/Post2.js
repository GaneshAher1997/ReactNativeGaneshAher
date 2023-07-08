import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const Post2 = () => {
    const [name,setName] =useState('')
    const [age,setAge] =useState('')
    const [email,setEmail] =useState('')

    const SaveData = async()=>{
      const url ="http://192.168.0.104:3000/users";
        let result=await fetch(url,{
            method:"POST",
           
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,age,email})
        });
       
        result=await result.json();
        setName(' ');
        setAge(' ');
        setEmail(' ');
if(result){
    alert("Data Is Added Successfully")
}

    }
  return (
    <View style={{marginVertical:heightPercentageToDP(5)}}>
      <Text style={{ 
         padding:10,
        marginVertical:heightPercentageToDP(5),
        fontSize:18,
        backgroundColor:'silver',
        textAlign:'center',}}>Post Form Data</Text>
      <TextInput 
      style={Styles.inputStyle}
       placeholder='Enter the Name'
       value={name}
       onChangeText={(text)=>setName(text)}
      />
          <TextInput 
          style={Styles.inputStyle}
       placeholder='Enter the Age'
       value={age}
       onChangeText={(text)=>setAge(text)}
      />
          <TextInput 
          style={Styles.inputStyle}
       placeholder='Enter the Email'
       value={email}
       onChangeText={(text)=>setEmail(text)}
      />

      <Button title='Save the Data' onPress={SaveData}/>

    </View>
  )
}

export default Post2;
const Styles =StyleSheet.create({
    inputStyle:{
        borderWidth:2,
        margin:20,
        padding:5,
    }
})