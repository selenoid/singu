import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../navigation/AccountScreen';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Accounts" component={AccountScreen} />
    </Tab.Navigator>
  );
}


/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  }
}); */