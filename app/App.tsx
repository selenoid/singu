
// import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import AuthNavigator from './navigation/AuthNavigator';
import AppLoading from './screens/AppLoading';

export default function App() {
  useEffect(() => {
    console.log('App...')
  }, [])

  const [user, setUser] = useState('');
  const [IsReady, setIsReady] = useState(false);

  /* const RestoreUser = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setUser(true);
    } else {
      setUser(false);
    }
  }; */


  useEffect(
    () => {
      //setUser
      setTimeout(() => {
        setUser('{"name":"EMRE SElEN"}')
        console.log('loaded1')
      }, 1000);

      setTimeout(() => {
        setIsReady(true)
        console.log('loaded1')
      }, 4000);

      setTimeout(() => {
        // setUser('')
        // console.log('useer expired...')
      }, 6000);
    }, []
  )

  if (!IsReady) {
    return (
      <AppLoading
      /* startAsync={RestoreUser}
      onFinish={() => setIsReady(true)}
      onError={() => {}} */
      />
    );
  }

  return (
    <>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  }
});