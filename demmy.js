// import * as React from "react";


// import { Button } from "react-native";
// import { AntDesign } from '@expo/vector-icons';

// import { createStackNavigator } from "@react-navigation/stack";

// import Home1 from "./Screens/Home1";
// import { NavigationContainer } from "@react-navigation/native";
// import LogIns from "./Screens/LogIns";
// import Room from "./Screens/Room";




// const Stack = createStackNavigator()

// const App=()=>  {



//   const BtnAction=()=>{
//     alert("Hello! I am an alert box LeftSide!!");
//     // console.log("Hello i am Log");
//   }
//   const IconAction=()=>{
//     alert("Hello! I am an alert box Icon!!");
//     // console.log("Hello i am Log");
//   }
//   return (



//    <NavigationContainer> 
//       <Stack.Navigator 
//       screenOptions={{

//           // title: "Welcome To LogIn Screen",?
//           headerTintColor: "white",
//           headerStyle: {
//             backgroundColor: "orange",
//           },

//           headerTitleStyle: {
//             fontSize: 16,
//           },
//         }}
//       >
//       <Stack.Screen
//           name="LogIns"
//           component={LogIns}
//           // give styles in Stack Header only LogIn Screen
//           options={{
          
//             title: "Welcome To LogIn Screen", 
//             //  headertitle asel tr title show nhi hot.
//             headerTitle:()=><Button onPress={BtnAction} title="LeftBtn" />,
//            headerRight:()=>  <AntDesign onPress={IconAction} name="user" size={24} color="black" />,
//             headerTintColor: "white",
//             headerStyle: {
//               backgroundColor: "silver",
//             },

//             headerTitleStyle: {
//               fontSize: 20,
//             },
//           }}
//         />
  
//         <Stack.Screen name="Home1" component={Home1} />
//         <Stack.Screen name="Room" component={Room} />
   
//       </Stack.Navigator>
//        </NavigationContainer>
  
//   );
// };

//  export default App;

// stack Navigation End.........................................


// import { View, Text } from 'react-native'
// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// // import { NavigationContainer } from '@react-navigation/native'
// import { NavigationContainer } from "@react-navigation/native";

// import SignUp from './Screens/TabNavigation/SignUp'

// const Tab=createBottomTabNavigator()   
// const App = () => {
//   return (
//  <NavigationContainer>
//   <Tab.Navigator>
//     <Tab.Screen name="SignUp" component={SignUp} />
//     <Tab.Screen name="SignUp2" component={SignUp} />
//     <Tab.Screen name="SignUp3" component={SignUp} />
//   </Tab.Navigator>
//  </NavigationContainer>
//   )
// }

//  export default App






 





import { View, Text } from 'react-native'
import React from 'react'
import GetApIData from './Screens/API/GET/GetApIData'
import FlatlistGetData from './Screens/API/GET/FlatlistGetData'
import Post1 from './Screens/API/Post/Post1'
import Post2 from './Screens/API/Post/Post2'

import Post3 from './Screens/API/Post/Post3'
import Post4 from './Screens/API/Post/Post4'


const App = () => {
  return (
    <View>
   {/* <GetApIData /> */}
   {/* <FlatlistGetData /> */}
   {/* <Post1 /> */}
   {/* <Post2 /> */}
   {/* <Post3 /> */}
   <Post4 />
    </View>
  )
}

export default App