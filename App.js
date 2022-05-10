import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, TextInput, Button } from "react-native-paper";

export default function App() {
  const [username, setUsername] = useState("Admin");
  const [password, setPassword] = useState("Password");
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Avatar.Image size={200} source={require("./assets/favicon.png")} />
        <Text>Username: {username}</Text>
        <Text>Password: {password}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button icon="login" mode="contained" onPress={() => alert(username)}>
          LOGIN
        </Button>
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
  },
  headerContainer: {
    flex: 0.5,
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
