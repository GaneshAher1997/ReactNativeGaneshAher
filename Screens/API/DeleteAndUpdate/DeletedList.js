import {
  View,
  Text,
  ScrollView,
  StyleSheet,

  Button,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";


const DeletedList = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectUser, setSelectedUser] = useState("");

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");


const navigation=useNavigation();

  useEffect(() => {
    if (selectUser) {
      setName(selectUser.name)
      setAge(selectUser.age.toString())
      setEmail(selectUser.email)
    }


  }, [selectUser])

  const getApiData = async () => {
    const url = "http://192.168.43.160:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  }, []);

  const DeleteApiData = async (id) => {
    console.log(`${url}/${id}`);
    const url = "http://192.168.43.160:3000/users";
    let result = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    result = await result.json();
    if (result) {
      alert("User Deleted");
      getApiData();
    }
  };
  const updateUser = (data) => {
    setShowModal(true);
    setSelectedUser(data);
  };
  const UpdateData = async () => {

    const url = "http://192.168.43.160:3000/users";
    const id = selectUser.id
    let result = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ name, age, email })
    });
    result = await result.json();
    if (result) {
      alert("User Updated");
      getApiData();
      setShowModal(false)
    }
  };

 const  handlePress =()=>{
   navigation.navigate('Search');
  }
  return (
    <ScrollView style={Styles.container} >
      {data.map((item) => (
        <TouchableOpacity style={Styles.dataWraper} onPress={handlePress}>
          {/* <View
            style={{ flex: 1, paddingVertical: 10, justifyContent: "center" }}
          >
            <Text>Id : {item.id}</Text>
          </View> */}
          <View
            style={{ flex: 1, paddingVertical: 10, justifyContent: "center" }}
          >
            <Text>Name : {item.name}</Text>
          </View>
          <View
            style={{ flex: 1, paddingVertical: 10, justifyContent: "center" }}
          >
            <Text>Age : {item.age}</Text>
          </View>
          <View style={{ flex: 1, paddingVertical: 10, justifyContent: 'center' }}>
            <Text>Email : </Text>

            {item.email ?
              <Text> {item.email}</Text>
              :
              <Text>NA</Text>
            }
          </View>

          <View style={{ flex: 1, gap: 10 }}>
            <Button onPress={() => DeleteApiData(item.id)} title="Delete" />

            <Button onPress={() => updateUser(item)} title="Update" />
          </View>
        </TouchableOpacity>
      ))}

      <Modal visible={showModal} transparent={true}>
        <View style={Styles.centerView}>
          <View style={Styles.modalView}>
            <TextInput
              style={Styles.inputStyle}
              placeholder="Enter the Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <TextInput
              style={Styles.inputStyle}
              placeholder="Enter the Age"
              keyboardType="numeric"
              value={age}
              onChangeText={(text) => setAge(text)}
            />

            <TextInput
              style={Styles.inputStyle}
              placeholder="Enter the Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            
            <View style={{ marginVertical: heightPercentageToDP(2) }}>
              <Button title="Update" onPress={UpdateData} />
            </View>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


export default DeletedList;
const Styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
    
  },
  dataWraper: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "orange",
    margin: 5,
    padding: 8,
    
  
    

    //    flexWrap:'wrap'
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {

    backgroundColor: "#fff",
    padding: 60,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    elevation: 5,
  },
  inputStyle: {
    borderWidth: 2,
    margin: 2,
    padding: 5,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
    // backgroundColor:'red',

  }
});
