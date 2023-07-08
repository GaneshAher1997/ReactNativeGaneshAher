import { useNavigation } from '@react-navigation/native'
import React, { Component, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, Text, View } from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const PropsComponents = () => {
    const [name,setName]=useState('Ganesh')

  return (
    <TouchableOpacity style={{backgroundColor:'blue', marginVertical:heightPercentageToDP(20)}}
    >
        <View style={{backgroundColor:'teal',margin:10}}> 
        <Text> {name} </Text>
        <Text> Send Props Here</Text>
        </View>

        <NewProps send={name}/> 
         {/* send the props into NewProps Componets */}

         <UpdateProps send={name} />
         
    </TouchableOpacity>
    
  )
}

const NewProps = (props)=>{
    // console.log('props>>>>>>>>>>>>>>>>>>>>>>>',props.name);
    return(
        <View style={{backgroundColor:'red',margin:10,}}>
             <Text>{ props.send}</Text>
            <Text> Get Props Here </Text>
         
        </View>
    )
}


const UpdateProps =(props)=>{
    // console.log('aditi>>>>>>>>>>>>>>>>>',props.send);
    const navigation=useNavigation();

    const [change,setCahnge]=useState(props.send)
   
   const handlePress=()=>{
    navigation.navigate('Propss2')
   }

    return( 
        <View  style={{backgroundColor:'pink',margin:10,}} >

            <Text> Update the Props with the help of State </Text>

            <Text> {change} </Text>
            <Button title='update' onPress={()=>setCahnge('Ganesh Aher')}/> 
            <View style={{marginVertical:10,}}>
                
            <Button title='Go to Next Page' onPress={handlePress}/>


            </View>
        </View>
    )
}
export default PropsComponents;

// what is the props ?
//  "Props are basically Object it's hold hole componets Data 
//  and it's main purpose are it's passed the Data one component's two Anather Componets"

//  Props valaue can not be change but 

// props value can be change with the help of state

//  1.first we create parent Component PropsComponents 
//  2.then we create two child 1.NewProps 2.UpdateProps
//  3.then we send the create state in Parent Component and store the Ganesh
//  4.and we send the state as a props into child Components
//  5.then received the props in UpdateProps Component and store it in state and then update it
