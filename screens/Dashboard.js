import { FlatList, StyleSheet } from "react-native";
import ProjectCard from "../components/dashboard/ProjectCard";
import Spacer from "../components/util/Spacer";

function Dashboard({ route, navigation }) {
    const { projectsData } = route.params;

    function renderProjectCard(project) {
        function onPressHandler() {
            navigation.navigate("ProjectDetails", {
                project: project.item,
              });
        }
        
        return <ProjectCard name={project.item.name} onPress={onPressHandler} />;
    }
  
    return (
    <FlatList
      contentContainerStyle={styles.projectsList}
      ItemSeparatorComponent={Spacer}
      data={projectsData}
      keyExtractor={(project) => project.id}
      renderItem={renderProjectCard}
    />
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  projectsList: {
    flex: 1,
  },
});
