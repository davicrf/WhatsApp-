import React from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator, MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/homeScreen';
import Conversas from '../screens/conversas';
import Status from '../screens/status';
import Chamadas from  '../screens/chamadas';
import Camera from '../screens/camera';
import Icon from 'react-native-vector-icons/Feather';


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const MaterialTopTab =()=>{
    return(
        <Tab.Navigator initialRouteName="CONVERSAS" tabBarOptions={{style: {backgroundColor: '#128c7E'}, activeTintColor: '#fff', fontWeight: "bold", indicatorStyle:{backgroundColor: '#fff'}, tabStyle: {justifyContent: "flex-start", alignItems: "center"}}}>
            <Tab.Screen name="camera" component={Camera} options={{tabBarLabel:()=>(<View><Icon color='#fff' name="camera" size={16}/></View>)}}/>
            <Tab.Screen name="CONVERSAS" component={Conversas}/>
            <Tab.Screen name="status" component={Status}/>
            <Tab.Screen name="CHAMADAS" component={Chamadas}/>
        </Tab.Navigator>
    )
}

const Main =()=>{
return(
    <View style={{flex: 1}}>
    <StatusBar style="light" backgroundColor={'#075E54'}/>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={({navigation, route}) => ({
                title: 'WhatsApp',headerTintColor: '#fff', headerStyle:{elevation: 0, backgroundColor: '#128c7E'},  headerRight:()=>{
                    return(
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity style={{marginHorizontal: 5}}>
                        <Icon name="search" size={26} color="#fff"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginHorizontal: 5}}>
                        <Icon name="more-vertical" size={26} color="#fff"/>
                    </TouchableOpacity>
                    </View>)} })} name="home" component={MaterialTopTab}/>
        </Stack.Navigator>
    </NavigationContainer>
    </View>
    
)
}

export default Main; 