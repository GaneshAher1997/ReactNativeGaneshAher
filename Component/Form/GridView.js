import React from 'react'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { Text, View } from 'react-native'

const GridView = () => {
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
        <Text> GridView</Text>
        <ScrollView> 
        <View style={Styles.main}> 
        {
            UserData.map((item)=>
         
                <Text style={Styles.itemList} >{item.name}</Text>
           
            )
         }
         </View>
         </ScrollView>

    
    </View>
  )
}

const Styles =StyleSheet.create({
  main:{
    flex:1,
    // height:'100%',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  itemList:{
      fontSize:17,
      margin:5,
      padding:5,
      color:'white',
      backgroundColor:'blue',
      borderColor:'black',
      borderWidth:2,
      height:80,
      width:80,
      
    
   
   
  }
})


export default GridView