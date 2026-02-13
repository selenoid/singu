import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    useEffect(() => {
      console.log('Home!')
    }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
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