import React from 'react'
import { SectionList, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { FlatList, Text } from 'react-native'

const SectionLists = () => {

    const UserData =[
        
        {
            id: 20 ,
            name: 'Aher2' ,
            data:['c','c++','java']
           },
           {
            id: 30 ,
            name:'Krn2' ,
            data:['c','c++','java']
           },
           {
            id: 40 ,
            name:'Sachin2' ,
            data:['c','c++','java']
           },
           {
            id: 33,
            name:'Aditi2',
            data:['c','c++','Aditi']
           },
           {
            id:1  ,
            name: 'Ganesh2' ,
            data:['c','Ganesh','java']
           },
           {
            id: 2 ,
            name: 'Aher1' , 
             data:['c','JS','java']
           },
           {
            id: 3 ,
            name:'Krn1' ,
            data:['Krn','c++','java']
           },
           {
            id: 4 ,
            name:'Sachin1' ,
            data:['DSA','c++','java']
           },
   
        {
         id: 20 ,
         name: 'Aher2' ,
         data:['c','c++','java']
        },
        {
         id: 30 ,
         name:'Krn2' ,
         data:['c','c++','java']
        },
        {
         id: 40 ,
         name:'Sachin2' ,
         data:['c','c++','java']
        },
        {
         id: 33,
         name:'Aditi2',
         data:['c','c++','Aditi']
        },
        {
         id:1  ,
         name: 'Ganesh2' ,
         data:['c','Ganesh','java']
        },
        {
         id: 2 ,
         name: 'Aher1' , 
          data:['c','JS','java']
        },
        {
         id: 3 ,
         name:'Krn1' ,
         data:['Krn','c++','java']
        },
        {
         id: 4 ,
         name:'Sachin1' ,
         data:['DSA','c++','java']
        },

          
     
      ]
  return (
    <View>
        <Text> SectionLists</Text>
        <SectionList
         sections={UserData}
         renderItem={({item})=>
                <View>
                <Text style={{marginLeft:10,margin:2,backgroundColor:'teal'}}> {item}</Text>
                </View>
         }

         renderSectionHeader={({section:{name}})=><Text style={{backgroundColor:'red'}}>{name}</Text>
           
        }
        />
    </View>
        
  )
}

export default SectionLists