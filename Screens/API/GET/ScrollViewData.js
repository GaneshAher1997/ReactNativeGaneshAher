import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScrollViewData = () => {
  const navigation = useNavigation();
    const [data,setData] =useState([]);
   
    const ApiData =async()=>{
        const url ="http://192.168.43.160:3000/users";
        let result = await fetch(url)
        result =await result.json();
        setData(result)

    }
    useEffect(()=>{
        ApiData()
    },[])
    const handlePress = () => {

      navigation.navigate('PostData');
    };
  return (
    <ScrollView style={{flex:1,marginVertical:heightPercentageToDP(2)}}>
      <Text style={{
        padding:10,
        marginVertical:heightPercentageToDP(5),
        fontSize:18,
        backgroundColor:'silver',
        textAlign:'center',

    }}>ScrollView GetApIData</Text>

      {
        data.map((item)=>
            <TouchableOpacity style={{ 
              width:widthPercentageToDP(90),
              paddingVertical:heightPercentageToDP(2),
              paddingHorizontal:widthPercentageToDP(2),
              borderColor:'black',borderWidth:2,
              margin:6,
              marginLeft:widthPercentageToDP(5),
               }}
               onPress={handlePress}
               >
                <Text style={{backgroundColor:'orange'}}>Id:{item.id}</Text>
                <Text>Title: {item.name}</Text>
                <Text>Title: {item.age}</Text>
            </TouchableOpacity>
        )
      }
    </ScrollView>
  )
}

export default ScrollViewData