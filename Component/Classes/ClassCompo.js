import React, { Component } from 'react'
import { Button } from 'react-native'
import { TextInput } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import Student from './Student'

export class ClassCompo extends Component {
    constructor(){
        super();
        this.state={
            Name:'Ganesh',
        }

    }
    fruit =(vald)=>{
       this.setState({vald})
    }
  render() {
    return (
      <View>
        <Text>ClassComponen </Text> 
        <Text>{this.state.Name}</Text>
        <TextInput 
        placeholder='Enter Your Name'
        onChangeText={(abc)=>this.fruit(abc)}
        />
        <Button title='Click  on me' onPress={this.fruit} />
        <Student name={this.state.Name} />

 </View>
    )
  }
}

export default ClassCompo