import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackEnum } from '../shared/config/routes';
import { Gallery } from '../screens/Gallery';
import { headerStyle } from './styles';
import { ImagePage } from '../screens/ImagePage';

const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={headerStyle}>
                <Stack.Screen name={RootStackEnum.GALLERY} component={Gallery} />
                <Stack.Screen name={RootStackEnum.IMAGE_PAGE} component={ImagePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator