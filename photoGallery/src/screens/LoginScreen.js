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

 import "text-encoding-polyfill";
import React, {useEffect} from 'react';
import { useAuthContext } from "@asgardeo/auth-react-native";
import { Button, Image, Linking, Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { styles } from "../components/styles";
import { initialState, useLoginContext } from "../../context/LoginContext";

// Create a config object containing the necessary configurations.
const config = {
    clientID: "LfQXHek26Vp1tbRwesJ0HJu4aMMa",
    serverOrigin: "https://10.0.2.2:9443",
    signInRedirectURL: "wso2sample://oauth2"
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LoginScreen = ({ navigation }) => {

    const { loginState, setLoginState, loading, setLoading } = useLoginContext();
    const { state, initialize, signIn, getBasicUserInfo, getIDToken, getDecodedIDToken } = useAuthContext();

    /**
     * This hook will initialize the auth provider with the config object.
     */
    useEffect(() => {
        initialize(config);
    }, []);

    /**
     * This hook will listen for auth state updates and proceed.
     */
    useEffect(() => {
    console.log("inside useEffect");
        if (state?.isAuthenticated) {
        console.log("authenticated");
            const getData = async () => {
                try {
                    const basicUserInfo = await getBasicUserInfo();
                    const idToken = await getIDToken();
                    const decodedIDToken = await getDecodedIDToken();

                    setLoginState({
                        ...loginState, ...state, ...basicUserInfo, idToken: idToken, ...decodedIDToken, hasLogin: true
                    });
                    setLoading(false);
                    navigation.navigate("HomeScreen");
                } catch (error) {
                    setLoading(false);
                    // eslint-disable-next-line no-console
                    console.log(error);
                    console.log("authentication failed");
                }
            };

            getData();
        }else if (loginState.hasLogoutInitiated) {
            setLoginState(initialState);
            navigation.navigate("LoginScreen");
        }
    }, [ state.isAuthenticated ]);

    /**
     * This function will be triggered upon login button click.
     */
    const handleSubmitPress = async () => {
        console.log("Login Clicked");
        setLoading(true);
        signIn()
            .catch((error) => {
                setLoading(false);
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };

    return (
        <View style = { styles.mainBody }>
            <View>
                <View style = { styles.container }>
                    <View style = { styles.imageAlign }>
                        <Image
                            source = { require("../assets/login.jpg") }
                            style = { styles.image }
                        />
                        <Text style = { styles.textpara }>
                        Welcome to photoGallery !
                        </Text>
                    </View>
                    <View style = { styles.buttonContainer }>
                        <TouchableOpacity style={styles.button}
                            onPress = { handleSubmitPress }>
                            <Text style={styles.textStyle}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        loading ?
                            (<View style={ styles.loading } pointerEvents="none">
                                <ActivityIndicator size="large" color="#FF8000" />
                            </View>) : null
                    }
                </View>
            </View>
        </View>
    );
};

export default LoginScreen;
