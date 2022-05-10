import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>Header</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text>Body</Text>
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
  },
  bodyContainer: {
    flex: 0.4,
    backgroundColor: "green",
  },
  footerContainer: {
    flex: 0.1,
  },
});
