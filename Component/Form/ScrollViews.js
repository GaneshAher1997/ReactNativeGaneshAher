import React from 'react'
import { ScrollView, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

const ScrollViews = () => {

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
         <Text>ScrollViews</Text>
         {
            UserData.map((item)=>
            <ScrollView> 
                <Text style={Styles.itemList}>{item.name}</Text>
            </ScrollView>
            )
         }

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
export default ScrollViews