import { TouchableOpacity, Image  } from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native'
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {COLORS, FONTS, icons } from '../constants'
import {Home} from '../screens';

const stack = createNativeStackNavigator();

const stackScreen = () => (
    <stack.Navigator
        initialRouteName='home'
    >
        <stack.Screen 
            name = "home"
            component = {Home}
            options = {{
                title:"SHOE SELECTOR",
                headerTintColor:COLORS.lightGray1,
                headerTitleAlign:"center",
                headerTitleStyle:{
                    ...FONTS.navTitle,
                },
                headerLeft:({onPress}) => (
                    <TouchableOpacity>
                        <Image 
                            source={icons.menu}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                            }}
                        />
                    </TouchableOpacity>
                ),
                headerRight:({onPress}) => (
                    <TouchableOpacity>
                        <Image 
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                                tintColor:COLORS.lightGray1,
                                width:25,
                                height:25,
                            }}
                        />
                    </TouchableOpacity>
                )
            }}

        />
    </stack.Navigator>
)

const theme = {
	...DefaultTheme,
	colors:{
		...DefaultTheme.colors,
		border:"transparent",
	},

};
const Index = () => {
  return (
    <NavigationContainer theme={theme}>
        {stackScreen()}
    </NavigationContainer>
  );
};

export default Index;


