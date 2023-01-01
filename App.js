import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Dashboard from "./screens/Dashboard";

import * as MOCKDATA from "./dev/mock-data.json";

export default function App() {
  const projects = JSON.parse(JSON.stringify(MOCKDATA.projects));

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Dashboard projectsData={projects} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    padding: 16,
    backgroundColor: 'red',
  },
});
