import { StyleSheet, TextInput, View } from 'react-native';
import Header from '../components/Header';
import InputForm from '../components/InputForm';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>About Contact</Text> */}
      <Header label={'Contact Us!'} />
      
      <InputForm placeHolder={'Enter your name'} onChange={function (): void {
        console.log('triptik...');
      } } label={''} />
      
      <TextInput style={styles.input}
        placeholder="Enter mail"
        placeholderTextColor="#fc0" />
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
  header: {
    fontSize: 26,
    color: '#ccc',
  },
  input: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 500
  }
});
