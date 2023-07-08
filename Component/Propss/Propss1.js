import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Propss1 = (props,Send) => {
  return (
    <View style={styles.parent}>
        <Text>Parent Div</Text>
   
        <View>
            <Text>{props.Send}</Text>
        </View>
      
    </View>
  )
}

export default Propss1

const styles =StyleSheet.create({
  parent:{
    backgroundColor:'red',
    // height:'40%',
    // width:'50%',
    // padding:10,
    paddingHorizontal:10,
    paddingVertical:10,
    borderColor:'teal',
    borderWidth:2,


  }
})







// {  props.Parent != "Pross2" ? 
// <View>
//     <Text>{props.Send}</Text>
// </View>
// : null
// }