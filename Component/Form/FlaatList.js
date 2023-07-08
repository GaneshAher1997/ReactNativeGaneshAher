import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const FlaatList = () => {
    const UserData =[
   {
    id:1  ,
    name: 'React' ,
   },
   {
    id: 2 ,
    name: 'JavaScript' ,
   },
   {
    id: 3 ,
    name:'HTML' ,
   },
   {
    id: 4 ,
    name:'Data Structure' ,
   },
   {
    id: 35,
    name:'English',
   },
   
    ]
  return (
    <View>
        <Text> FlatList</Text>

    <FlatList
      data={UserData}
      renderItem={({item})=>
      <View>
      
         <Text style={Styles.itemList}> {item.name} </Text>
       
        </View>

    }
      
    />
    </View>
  )
}

const Styles =StyleSheet.create({
    itemList:{
        fontSize:17,
        margin:10,
        padding:10,
        color:'white',
        backgroundColor:'blue',
        borderColor:'black',
        borderWidth:2,
        width:"100%",
     
    }
})

export default FlaatList