import React from 'react'
import { View,Text,Button } from 'react-native';

export default   Buttonhere = () => {


    const fruit1=()=>{
        console.log('click on me');
       } 

   const fruit2=(val)=>{
      console.log('val');
    }
  
  return (
    <View >
                   <Text>Button Event</Text>
        {/* simple Button Event called */}
        <Button title='Click on me ' onPress={fruit1} color={'red'} style={{justifyContent:''}} />

        <Button title='Press on me ' onPress={()=>console.log('press on me')} color={'red'} />

        {/* here passed the parameter in Button event */}
        <Button title='Click on me for juce' onPress={()=>fruit2("juce")} color={'red'} />
    </View>
  )
}

