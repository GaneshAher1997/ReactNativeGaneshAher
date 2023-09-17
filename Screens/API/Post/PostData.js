import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const PostData = (props) => {
  const navigation =useNavigation();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const SaveData = async () => {
    if (!name) {
        setNameError(true);
    } else {
      setNameError(false);
    }
    if (!age) {
        setAgeError(true);
    } else {
        setAgeError(false);
    }
    if (!email) {
        setEmailError(true);
    } else {
        setEmailError(false);
    }
    if (!name || !age || !email) {
      return false;
    }

    const url = "http://192.168.43.160:3000/users";

    
    let result = await fetch(url, {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, email }),
    });

    result = await result.json();
    setName(" ");
    setAge(" ");
    setEmail(" ");
    if (result) {
      alert("Data Added Successfully");
    }
    console.log("Data Added Successfully")
  };
  return (
    <View style={{ marginVertical: heightPercentageToDP(5) }}>
      <Text
        style={{
          padding: 10,
          marginVertical: heightPercentageToDP(5),
          fontSize: 18,
          backgroundColor: "silver",
          textAlign: "center",
        }}
      >
        Post Form Data
      </Text>

      <TextInput
        style={Styles.inputStyle}
        placeholder="Enter the Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameError ? <Text style={Styles.errorText}>Please Enter VAlide Name</Text> : null}

      <TextInput
        style={Styles.inputStyle}
        placeholder="Enter the Age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
       {ageError ? <Text style={Styles.errorText}>Please Enter Valide Age</Text> : null}

      <TextInput
        style={Styles.inputStyle}
        placeholder="Enter the Email"
        keyboardType="email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
       {emailError ? <Text style={Styles.errorText}>Please Enter Valide Email</Text> : null}
       <View style={{marginVertical:heightPercentageToDP(2)}}>
        
      <Button title="Save the Form Data" onPress={SaveData} />
     </View>
      <Button title='Go to Next Page'  onPress={() => props.navigation.navigate('DeletedList')} />
    </View>
  );
};

export default PostData;
const Styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 2,
    margin: 20,
    padding: 5,
    marginBottom:5,
    
  },
  errorText:{
    color:'red',
    marginLeft:20,
    // backgroundColor:'red',
    
  }
});
