import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Header</Text>
        <Avatar.Image size={200} source={require("./assets/favicon.png")} />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View>
          <TextInput label="Username" value={username} />
          <TextInput label="Password" />
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  headerContainer: {
    flex: 0.5,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 0.4,
    backgroundColor: "green",
  },
  footerContainer: {
    flex: 0.1,
  },
  loginText: {
    fontSize: 24,
    paddingLeft: 12,
  },
});
