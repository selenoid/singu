import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import InputForm from '../components/InputForm';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>About Contact</Text> */}
      <Header label={'Contact Us!'} />
      
      <InputForm placeHolder={'Enter your name'} /* onChange={function (): void { console.log('name...'); } }  *//>

      <InputForm placeHolder={'Enter mail'} autoCorrection={true} keyboardType='email-address'/* onChange={function (): void {console.log('mail...');} } */ />
      
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
