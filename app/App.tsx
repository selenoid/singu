import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  debugger
  useEffect(() => {
    console.log('App...')
  }, [])
  return (
    <View style={styles.container}>
      {/* <RootLayout ></RootLayout> */}
    </View>
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
  },
});