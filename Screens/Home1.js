import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";

import {Button, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Home1 = (props) => {
    // console.log("propssss==============",props)
   const navigation = useNavigation();
 
   useEffect(()=>{

 },[]);
   return (
    <View style={styles.parent}>
      <Text style={styles.textItem}>HomeScreen</Text>
      <Text style={styles.textItem}>Get Data from Login Screen</Text>
      <Text style={styles.textItem1}>Name : {props.route.params?.name}</Text>
      <Text style={styles.textItem1}>Email : {props.route.params?.email}</Text>
      <Text style={styles.textItem1}>Date : {props.route.params?.date}</Text>

     <Button title="go to Tab Navigator file" onPress={ props.navigation.navigate("Room")} /> 

 

    </View>
  );
};

export default Home1 ;

const styles = StyleSheet.create({
    parent:{
      flex:1,
      backgroundColor:'grey',
      justifyContent:'center'

    },
    textItem:{
       height:heightPercentageToDP(5),
        textAlign:'center',
        justifyContent:'center',
        fontSize:22,
        color:'#fff',

    },
    textItem1:{
        height:heightPercentageToDP(5),
        textAlign:'center',
        justifyContent:'center',
        fontSize:22,
        color:'black',

    },
})



// Problems loading reference 'vscode://schemas/settings/configurationDefaults': Unable to load schema from 'vscode://schemas/settings/configurationDefaults': cannot open vscode://schemas/settings/configurationDefaults. Detail: Unable to resolve text model content for resource vscode://schemas/settings/configurationDefaults.(768)