import { View, Text, Button } from 'react-native'
import React from 'react'

const Post1 = () => {

    const postApiData = async()=>{
        const infoData ={
            name:"peter",
            age:30,
            email:"piter123@gmail.com"
        }
        const url ="http://192.168.0.104:3000/users";
        let result = await fetch(url ,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(infoData)
        });

        result=await result.json();
        // console.warn("Data Save..........",result);
    }
  return (
    <View>
      <Text>Post API</Text>
      <Button title='Save Data' onPress={postApiData}/>

    </View>
  )
}

export default Post1