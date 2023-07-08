import React, { Component } from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'

export class Student extends Component {
  render() {
    return (
        <View>  
    <Text>Student</Text>
    
      <Text>My Name is : {this.props.name} </Text>
      
      </View>
 

    )
  }
}

export default Student