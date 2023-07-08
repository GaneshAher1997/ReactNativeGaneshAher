import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "react-native";
import {
    heightPercentageToDP,
    widthPercentageToDP,
  } from "react-native-responsive-screen";

const LogIns = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.parent}>
      <Text style={styles.textItem}>LogIn Page</Text>

      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home1",
        {name:'Ganesh',date:29.6,email:'aherganesh194@gmail.com'})}
      /> 

      {/* <Button
        title="Go to Home Page"
        onPress={() =>console.log("Go to Home Screen")}
      /> */}
      
    </View>
  );
};

export default LogIns;
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  textItem: {
    textAlign: "center",
    justifyContent: "center",
    margin: 10,
    color: "#fff",
    fontSize: 25,
  
//  height:heightPercentageToDP(5)
  },
});
