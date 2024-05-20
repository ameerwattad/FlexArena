import { StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Home'  component={Home} />
      <Stack.Screen name='Login' component={Login}/>
    </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  
  container:{
    flex:1,
    backgroundColor:'#cd5c5c',
  }, 
  image: { 
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});
