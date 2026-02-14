import { StyleSheet, Text, View } from "react-native";

const AccountScreen = () => {
  return <View style={styles.container}>
    <Text style={styles.text}>ACCOUNT SCREEN</Text>
  </View>
}


export default AccountScreen;

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