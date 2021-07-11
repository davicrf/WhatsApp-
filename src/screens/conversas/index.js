import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {userList} from  '../../usuarios';
import Icon from 'react-native-vector-icons/Feather';
import {useLinkTo} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Mensagem from '../mensagem';


const {width:wWidth, height:wHeight} = Dimensions.get('window');

const Stack = createStackNavigator();
const ChangeScreen = () =>{
   return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="mensagem" component={Mensagem}/>
        </Stack.Navigator>
    </NavigationContainer>
   )
}

const Conversas=({ navigation: { navigate } })=>{

    const renderItem=({item}:{item:userListProps})=>{
        return (
           <TouchableOpacity onPress={()=>navigate('mensagem')}>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between",  width: wWidth - 20, marginVertical: 5, marginHorizontal: 10, borderBottomWidth: StyleSheet.hairlineWidth, paddingBottom: 10}}>
                <View style={{flexDirection: "row", alignItems: "center" }}>
                    <View><Image source={item.profilePic} style={{width: 60, height: 60, borderRadius: 30}}/></View>
                <View style={{paddingHorizontal: 10}}>
                    <Text>{item.name}</Text>
                    <Text style={{color: "grey"}}>{item.lastMessage}</Text>
                </View>
                </View>
                <View>
                    <Text style={{color: "grey"}}>{item.lastSeen}</Text>
                </View>   
            </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <FlatList data={userList} keyExtractor={(item)=> item.id.toString()} renderItem={renderItem}/>
            <View>
            <TouchableOpacity>
            <View style={{backgroundColor: '#25D366', width: 70, height: 70, borderRadius: 35, position: "absolute", right: 10, bottom: 20}}>
                <View style={{justifyContent: "center", alignItems: "center", height: "100%", width: "100%"}}>
                    <Icon name="message-square" size={30} color="#fff"/>
                </View>
            </View>
            </TouchableOpacity>
                
            </View>
        </View>
    )
}

export default Conversas;