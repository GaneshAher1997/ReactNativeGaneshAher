import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

const FlatlistGetData = () => {
  const navigation = useNavigation();
  const [infoData, setInfoData] = useState([])
  const getApiData = async () => {
    const url = "http://192.168.43.160:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setInfoData(result)
  }

  useEffect(() => {
    getApiData()
  }, [])




  const handlePress = () => {

    navigation.navigate('ScrollViewData');
  };

  const handlePress2 = () => {

    navigation.navigate('PropsComponents');
  };

  return (
    <View style={{ flex: 1, marginVertical: heightPercentageToDP(2) }}>
      <TouchableOpacity    
       onPress={handlePress2}   >

      <Text
      style={{
        padding:10,
        marginVertical:heightPercentageToDP(5),
        fontSize:18,
        backgroundColor:'silver',
        textAlign:'center',
    
    }}

      >FlatlistGetData</Text>
      </TouchableOpacity>

      <FlatList
        data={infoData}
        renderItem={({ item }) =>
          <TouchableOpacity
            style={{
              paddingVertical: heightPercentageToDP(2),
              paddingHorizontal: widthPercentageToDP(2),
              borderColor: '#ccc', borderWidth: 2,
            }}
            onPress={handlePress}
          >
            <Text style={{ backgroundColor: 'gold' }}> Id : {item.id}</Text>
            <Text> Tilte : {item.name}</Text>
            <Text> Body :{item.age}</Text>
          </TouchableOpacity>

        }
      />
    </View>
  )
}

export default FlatlistGetData