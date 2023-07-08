import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import Propss1 from './Propss1'

const Propss2 = (props) => {
  return (
    <View style={Styles.parent}>
        <Text style={{fontSize:25}}>Received Props</Text>
        <Propss1 
        
        Send={"Hello"}

        />
        
        <Button  title='press on me'
          
        />
     </View>
  )
}

export default Propss2;
const Styles=StyleSheet.create({
  parent:{
    backgroundColor:'teal',
  
    margin:20,
    padding:10

  }
})