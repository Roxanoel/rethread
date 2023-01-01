import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "./screens/Dashboard";

import * as MOCKDATA from "./dev/mock-data.json";

const Stack = createStackNavigator();

export default function App() {
  const projects = JSON.parse(JSON.stringify(MOCKDATA.projects));

  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              initialParams={{ projectsData: projects }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    padding: 16,
  },
});
