import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppLoading() {
  return <View style={styles.container}>
    <Text style={styles.text}>APP LOADING INFO</Text>
  </View>
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