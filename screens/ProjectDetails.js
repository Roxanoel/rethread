import { StyleSheet, View } from "react-native";
import { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProjectPlanning from "./ProjectPlanning";
import ProjectProgress from "./ProjectProgress";
import ProjectReview from "./ProjectReview";

const BottomTab = createBottomTabNavigator();

function ProjectDetails({ route, navigation }) {
  const projectData = route.params.project;

  useLayoutEffect(() => {
    navigation.setOptions({ title: projectData.name });
  }, [navigation, projectData]);

  return (
    <View style={styles.detailsContainer}>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen name="Planning" component={ProjectPlanning} initialParams={{ projectData: projectData.planning}} />
        <BottomTab.Screen name="Progress" component={ProjectProgress} initialParams={{ projectData: projectData.progress}} />
        <BottomTab.Screen name="Review" component={ProjectReview} initialParams={{projectData: projectData.review}} />
      </BottomTab.Navigator>
    </View>
  );
}

export default ProjectDetails;

const styles = StyleSheet.create({
    detailsContainer: {
        flex: 1,
    }
});
