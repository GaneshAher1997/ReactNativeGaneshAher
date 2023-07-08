import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

const Post3 = () => {
    const[data,setData]=useState([])

    const postApiData = async()=>{
        const url ="http://192.168.0.104:3000/users";
        let result = await fetch(url)
        result = await result.json()
    //   console.log("Post3.....",result);
       setData(result);
    }
    useEffect(()=>{
        postApiData()
    },[])
  return (
    <View>
      <Text 
          style={{
            padding:10,
        marginVertical:heightPercentageToDP(5),
        fontSize:18,
        backgroundColor:'silver',
        textAlign:'center', }}
      >Post3</Text>
      {
        data.map((item)=>

        <View  style={{
            paddingVertical:heightPercentageToDP(2),
            paddingHorizontal:widthPercentageToDP(2),
            borderColor:'#ccc',borderWidth:2,
        }}>
            <Text  style={{backgroundColor:'gold'}}>Id : {item.id}</Text>
            <Text>Name : {item.name}</Text>
            <Text>Age : {item.age}</Text>
            <Text>Email : {item.email}</Text>
            </View>
        )
      }
    </View>
  )
}

export default Post3