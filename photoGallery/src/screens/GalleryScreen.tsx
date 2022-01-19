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

const GalleryScreen = ({ navigation }) => {

    return (
    <>
    <StatusBar barStyle={'dark-content'} />
      <View style={styles.background}>
      <GridImageView data={[ 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqe5muqrlSXq3ZbIf5sRlU-VXoN3MNCUUhQ&usqp=CAU',
       'https://image3.mouthshut.com/images/imagesp/925791837s.jpg' ,
        'https://9to5mac.com/wp-content/uploads/sites/6/2016/11/15-touch-bar-macbook-pro-tips-and-tricks1.jpg?quality=82&strip=all' ,
         'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8c29mdHdhcmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80' ]} />
      </View>
      </>
    );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    flex: 1
  },
});

export default GalleryScreen;
