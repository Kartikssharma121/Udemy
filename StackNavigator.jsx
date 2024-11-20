import { StyleSheet, Text, View ,Image, SafeAreaView} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Screens/Home';
import More from './Screens/More';
import CarePlan from './Screens/CarePlan';
import { NavigationContainer } from '@react-navigation/native';
import Components from './Screens/Components';
import Membership from './Screens/Membership';
import ServiceDetails from './Other/ServiceDetails';
import Services from './Screens/Services'
import Other from './AuthScreen/Other'
import Login from './AuthScreen/Login'
import Registration from './AuthScreen/Registration';
import Splash from './Screens/Splash'
import Otp from './AuthScreen/Otp';
import Emergency from './Other/Emergency'
const StackNavigator = () => {
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    // This stack will handle MoreDetails while keeping the tabs visible
    function HomeStack() {
        return (
           
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
             
                {/* <Stack.Screen name='MoreDetails' component={MoreDetails} /> */}

            </Stack.Navigator>
 
        );
    }

    function BottomTabs() {
        return (
            <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#14B8A6',tabBarInactiveTintColor: 'gray',tabBarStyle:{height:60},tabBarLabelStyle:{marginTop:-8,marginBottom:8}}}>
                <Tab.Screen name='HomeStack' component={HomeStack} options={{ tabBarLabel: "Home", headerShown: false, tabBarIcon:({focused,color,size})=>(
                 <Image
                    source={require('./assets/dashboard icon.png')}
                    style={{ width: size, height: size, tintColor: color }}
                /> )}} />
                <Tab.Screen name='Service' component={Services} options={{ tabBarLabel: "Services", headerShown: false, tabBarIcon:({focused,color,size})=>(
                 <Image
                    source={require('./assets/service.png')}
                    style={{ width: size, height: size, tintColor: color }}
                /> )}} />
                <Tab.Screen name='MemberShip' component={Membership} options={{ tabBarLabel: "", headerShown: false ,tabBarIcon:({focused,color,size})=>(
                 <Image
                    source={require('./assets/membership.png')}
                    style={{ width: 50, height: 50, marginTop:12,}}
                /> )}} />
                                <Tab.Screen name='CarePlan' component={CarePlan} options={{tabBarLabel:"CarePlan", tabBarIcon:({focused,color,size})=>(
                 <Image
                    source={require('./assets/healthcare.png')}
                    style={{ width: size, height: size, tintColor: color }}
                /> )}} />
                {/* <Tab.Screen name='CarePlan' component={CarePlan} options={{ tabBarLabel: "CarePlan", }} /> */}
                <Tab.Screen name='More' component={More} options={{ headerShown:false,tabBarLabel: "More", tabBarIcon:({focused,color,size})=>(
                 <Image
                    source={require('./assets/menu.png')}
                    style={{ width: size, height: size, tintColor: color}}
                /> )}} />

            </Tab.Navigator>
        );
    }


    return (
       
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' >
                <Stack.Screen name='Homee' component={BottomTabs} options={{ headerShown: false }} />
                <Stack.Screen name='More' component={More} />
                <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
                
                <Stack.Screen name='Components' component={Components} options={{ headerShown: false }} />
                <Stack.Screen name='ServiceDetails' component={ServiceDetails} options={{ headerShown: true}} />
                <Stack.Screen name='Emergency' component={Emergency} options={{ headerShown: true}} />
                <Stack.Screen name='Other' component={Other} options={{ headerShown: false}} />
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false}} />
                <Stack.Screen name='Register' component={Registration} options={{ headerShown: false}} />
                <Stack.Screen name='Otp' component={Otp} options={{ headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
   
    )
}

export default StackNavigator

const styles = StyleSheet.create({})