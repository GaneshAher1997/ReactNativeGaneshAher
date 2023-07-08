import React from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'
import { FlatList, Text } from 'react-native'

const FlaatList1 = () => {
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
        {
            id:10 ,
            name: 'React' ,
           },
           {
            id: 20 ,
            name: 'JavaScript' ,
           },
           {
            id: 30 ,
            name:'HTML' ,
           },
           {
            id: 40 ,
            name:'Data Structure' ,
           },
           {
            id: 3,
            name:'English',
           },
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
           {
               id:10 ,
               name: 'React' ,
              },
              {
               id: 20 ,
               name: 'JavaScript' ,
              },
              {
               id: 30 ,
               name:'HTML' ,
              },
              {
               id: 40 ,
               name:'Data Structure' ,
              },
              {
               id: 3,
               name:'English',
              },
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
               {
                   id:10 ,
                   name: 'React' ,
                  },
                  {
                   id: 20 ,
                   name: 'JavaScript' ,
                  },
                  {
                   id: 30 ,
                   name:'HTML' ,
                  },
                  {
                   id: 40 ,
                   name:'Data Structure' ,
                  },
                  {
                   id: 3,
                   name:'English',
                  },
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
                   {
                       id:10 ,
                       name: 'React' ,
                      },
                      {
                       id: 20 ,
                       name: 'JavaScript' ,
                      },
                      {
                       id: 30 ,
                       name:'HTML' ,
                      },
                      {
                       id: 40 ,
                       name:'Data Structure' ,
                      },
                      {
                       id: 3,
                       name:'English',
                      },
        
         ]
  return (
    <View>
       <Text> Advance FlatList</Text>
       <FlatList 
       data={UserData}
       renderItem={({item})=>
       <CustomComponet  item={item}/>
       }
       />

        
        </View>

  )
}
const CustomComponet =(props)=>{
    const item = props.item
    return(
        <View style={styles.box}> 
    <Text style={styles.item}> {item.name}</Text>
    <Text style={styles.item}> {item.id}</Text>
    </View>
    )
   }

export default FlaatList1
const styles=StyleSheet.create({
    box:{
        flexDirection:'row',
        marginBottom:2,
        borderWidth:2,
        backgroundColor:'red',
        width:200,
        height:40
        
    },
    item:{
   margin:2,
   flex:1,
   color:'white',
   backgroundColor:'teal',
   textAlign:'center',
   paddingVertical:5,
    },
})