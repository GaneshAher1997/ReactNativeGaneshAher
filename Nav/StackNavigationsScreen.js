import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import PostData from '../Screens/API/Post/PostData'
import DeletedList from '../Screens/API/DeleteAndUpdate/DeletedList'
import FlatlistGetData from '../Screens/API/GET/FlatlistGetData'
import ScrollViewData from '../Screens/API/GET/ScrollViewData'
import Search from '../Screens/API/DeleteAndUpdate/Search'
import UseRefHook from '../Component/Hooks/UseRefHook'
import ClassCompo from '../Component/Classes/ClassCompo'
import PropsComponents from '../Component/Propss/PropsComponents'
import Propss2 from '../Component/Propss/Propss2'

const Stack = createNativeStackNavigator()
const StackNavigationsScreen = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name='FlatlistGetData' component={FlatlistGetData} />
        <Stack.Screen name='ScrollViewData' component={ScrollViewData} />

        <Stack.Screen name='PostData' component={PostData} />
        <Stack.Screen name='DeletedList' component={DeletedList} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='UseRefHook' component={UseRefHook} />


        <Stack.Screen name='ClassCompo' component={ClassCompo} />

        <Stack.Screen name='PropsComponents' component={PropsComponents} />

        <Stack.Screen name='Propss2' component={Propss2} />



        

      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default StackNavigationsScreen