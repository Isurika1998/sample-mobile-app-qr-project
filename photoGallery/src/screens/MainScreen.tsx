/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

 import React from 'react';
 import { useAuthContext } from "@asgardeo/auth-react-native";
 import { useLoginContext } from "../../context/LoginContext";
 import {View, StyleSheet, StatusBar, Image} from 'react-native';
 import GridImageView from 'react-native-grid-image-viewer';
 import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import HomeScreen from './HomeScreen';
 import QRScannerScreen from './QRScannerScreen';
import GalleryScreen from './GalleryScreen';
import DevicesScreen from './DevicesScreen';
 
 const Tab = createBottomTabNavigator();
 
 const MainScreen = ({ navigation }) => {
 
     return (
       <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    if (route.name === 'Gallery') {
                        return (
                            <Image
                                source={require("../assets/user-profile.png")}
                                style={{tintColor: focused ? '#990033' : '#363636'}}
                            />
                        );
                    }else if (route.name === 'Login Info') {
                        return (
                            <Image
                                source={require("../assets/user-profile.png")}
                                style={{tintColor: focused ? '#990033' : '#363636'}}
                            />
                        );
                    } else if (route.name === 'Scan') {
                        return (
                            <Image
                                source={require("../assets/user-profile.png")}
                                style={{tintColor: focused ? '#990033' : '#363636'}}
                            />
                        );
                    } else if (route.name === 'Devices') {
                        return (
                            <Image
                                source={require("../assets/user-profile.png")}
                                style={{tintColor: focused ? '#990033' : '#363636'}}
                            />
                        );
                    }
                },
                    "tabBarActiveTintColor": "#990033",
                    "tabBarInactiveTintColor": "#363636",
                    "tabBarLabelStyle": {
                    "fontSize": 13,
                    "fontFamily": "Roboto-Medium"
                    },
                    "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                    ]
            })}>
        <Tab.Screen name="Gallery" component={GalleryScreen} 
            options = {({ navigation, route }) => ({
                title: 'photoGallery',
                headerStyle: {
                backgroundColor: '#990033',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
            })} />
       <Tab.Screen name="Scan" component={QRScannerScreen} />
       <Tab.Screen name="Login Info" component={HomeScreen} />
       <Tab.Screen name="Devices" component={DevicesScreen} />
     </Tab.Navigator>
     );
 };
 
 const styles = StyleSheet.create({
   background: {
     backgroundColor: 'black',
     flex: 1
   },
 });
 
 export default MainScreen;
 