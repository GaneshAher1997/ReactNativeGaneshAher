import { View, Text, TouchableOpacity, TextInput, StyleSheet,  } from 'react-native'
import React, { useState } from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { Button } from 'react-native';

const UseRefHook = () => {
    
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  return (
  
      
      <TouchableOpacity style={Styles.centerView}>
        
        
      
            <TextInput
              style={Styles.inputStyle}
              placeholder="Enter the Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <TextInput
              style={Styles.inputStyle}
              placeholder="Enter the Age"
              keyboardType="numeric"
              value={age}
              onChangeText={(text) => setAge(text)}
            />

            <TextInput
              style={Styles.inputStyle}
              placeholder="Enter the Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            
            <View style={{ marginVertical: heightPercentageToDP(2) }}>
            <Button title='Submit'/>
            </View>
         
         
      
      </TouchableOpacity>
    
  )
}

export default UseRefHook;
const Styles = StyleSheet.create({
    centerView: {
        flex: 1,
        padding:16,
        // justifyContent: "center",
        // alignItems: "center",
      },
 
      inputStyle: {
        borderWidth: 2,
        margin: 10,
        padding: 10,
       
      },
})