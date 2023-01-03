import { StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";

import ProjectPlanning from "./ProjectPlanning";
import ProjectProgress from "./ProjectProgress";
import ProjectReview from "./ProjectReview";
import PALETTE from "../assets/PALETTE";

const BottomTab = createBottomTabNavigator();

function ProjectDetails({ route, navigation }) {
  const projectData = route.params.project;

  useLayoutEffect(() => {
    navigation.setOptions({ title: projectData.name });
  }, [navigation, projectData]);

  return (
    <View style={styles.detailsContainer}>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: PALETTE.primary500,
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <BottomTab.Screen
          name="Planning"
          component={ProjectPlanning}
          initialParams={{ projectData: projectData.planning }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="colours" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Progress"
          component={ProjectProgress}
          initialParams={{ projectData: projectData.progress }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="pin" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Review"
          component={ProjectReview}
          initialParams={{ projectData: projectData.review }}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="flickr-with-circle" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </View>
  );
}

export default ProjectDetails;

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
  },
});
