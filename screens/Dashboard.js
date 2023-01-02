import { FlatList, StyleSheet, View } from "react-native";
import ProjectCard from "../components/dashboard/ProjectCard";
import Spacer from "../components/util/Spacer";

import PALETTE from "../assets/PALETTE";

function Dashboard({ route, navigation }) {
  const { projectsData } = route.params;

  function renderProjectCard(project) {
    function onPressHandler() {
      navigation.navigate("ProjectDetails", {
        project: project.item,
      });
    }

    const color = PALETTE.primary200; // Later, could be changed with project data if I want user to set a custom colour

    return (
      <ProjectCard
        name={project.item.name}
        onPress={onPressHandler}
        color={color}
      />
    );
  }

  return (
    <View style={styles.listContainer}>
      <FlatList
        contentContainerStyle={styles.projectsList}
        ItemSeparatorComponent={Spacer}
        data={projectsData}
        keyExtractor={(project) => project.id}
        renderItem={renderProjectCard}
      />
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  projectsList: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
