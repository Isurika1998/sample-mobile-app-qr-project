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

import React, {useEffect} from 'react';
import {StyleSheet, StatusBar, Button, View, Text} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';


    let onSuccess = (e) => {
        console.log('Scanned: ', e.data);

//        try {
//            let account = new AccountsService();
//            account
//                .addAccount(
//                    JSON.parse(e.data),
//                    pushId,
//                )
//                .then((response) => {
//                    let res = JSON.parse(response);
//                    console.log('Add account response: ' + response);
//                    if (res.res == 'OK') {
//                        navigation.navigate('Add Success', res.data);
//                    } else if (res.res == 'FAILED') {
//                        navigation.navigate('Add Failed');
//                    }
//                });
//        } catch (err) {
//            console.log(err);
//            navigation.navigate('Add Failed');
//        }
    };


const QRScannerScreen = ({ navigation }) => {

    return (
        <QRCodeScanner
            onRead={onSuccess}
            showMarker={true}
            flashMode={RNCamera.Constants.FlashMode.off}
            cameraStyle={{
                marginTop: 10,
                height: 200,
                alignSelf: 'flex-end',
            }}
        />
    );
};

export default QRScannerScreen;
