import React, { useState } from 'react'
import { Button, StyleSheet,Text, TextInput, View } from 'react-native';



const Form = () => {

const [name,setName]=useState('');
const [email,setEmail]=useState('');
const[pass,setPass]=useState('');
const[display,setDispaly]=useState(false)

const Clear =()=>{
    setName('');
    setEmail('');
    setPass('');
    setDispaly(false)
}


  return (
    <View>
        <TextInput
        placeholder='Enter The Name '
        style={Styles.inputText}
        value={name}
        onChangeText={(abc)=>setName(abc)}
        />
           <TextInput
        placeholder='Enter The Password'
        secureTextEntry={true}
        style={Styles.inputText}
        value={pass}
        onChangeText={(xyz)=>setPass(xyz)}
        />
           <TextInput
        placeholder='Enter The E-mail'
        style={Styles.inputText}
        value={email}
        onChangeText={(pqr)=>setEmail(pqr)}
        />
        <Text>
         Show the Data </Text>
        <Button title='Display the Values' onPress={()=>setDispaly(true)}/>
       <Text>Clear the data</Text>
        <Button title='clear' onPress={Clear}/>
       <View> 
       {
        display  ?
        <View>
            <Text>My Name is : {name} </Text>
            <Text>My Password is :{pass} </Text>
            <Text>My E-mail is : {email}</Text>
        </View>
        : null
       }
       </View>


    </View>
  )
}

export default Form;
const Styles=StyleSheet.create({
    inputText:{
        margin:10,
        padding:5,
        borderColor:'blue',
        borderWidth:2,
        color:'teal',
        fontSize:16,
    }
})