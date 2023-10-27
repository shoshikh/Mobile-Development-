import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './componenets/ProfileScreen'; // Update the path to your actual component file
import HomeScreen from './componenets/HomeScreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProfileScreen" component={SignInScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
