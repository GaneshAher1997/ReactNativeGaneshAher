import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'

const Search = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);

    const SearchUser = async (text) => {
        const url = `http://192.168.43.160:3000/users?q=${text}`;
        // Notes:- search Api call karnya sathi ?q dyava lagto aani text show karnya sathi ${text} ghetle aahe
        // console.log("url>>>>>>>>>>>>>>>>>>>>>>>>>>>>",url);
        let result = await fetch(url);
        result = await result.json();
        if (result) {
            setData(result);
        }



    }
    const  handlePress =()=>{
        navigation.navigate('UseRefHook');
       }
    

    return (
        <View>
            <TouchableOpacity onPress={handlePress} >
                <Text style={{ backgroundColor: 'gold', textAlign: 'center', fontSize: 22, }}>Search API CAll</Text>


            </TouchableOpacity>


            <TextInput
                style={Styles.inputStyle}
                placeholder='Search'
                onChangeText={(text) => SearchUser(text)}

            />

            <ScrollView style={{ height: '100%', marginVertical: heightPercentageToDP(2) }} >

                {data.length ?
                    //    notes:- jr data madhe kahi length asel kivha  data empty nasel   tr khalil data show kra

                    data.map((item) =>
                        <TouchableOpacity style={{
                            width: widthPercentageToDP(90),
                            paddingVertical: heightPercentageToDP(2),
                            paddingHorizontal: widthPercentageToDP(2),
                            borderColor: 'black', borderWidth: 2,
                            margin: 6,
                            marginLeft: widthPercentageToDP(5),
                        }}
                        //    onPress={handlePress}
                        >
                            <Text style={{ backgroundColor: 'orange' }}>Id:{item.id}</Text>
                            <Text>Title: {item.name}</Text>
                            <Text>Title: {item.age}</Text>
                        </TouchableOpacity>
                    )
                    : null

                }

            </ScrollView>


        </View>
    )
}

export default Search
const Styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 2,
        margin: 10,
        padding: 5,
        marginBottom: 5,


    },
})