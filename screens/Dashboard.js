import { FlatList, StyleSheet } from "react-native";
import ProjectCard from "../components/dashboard/ProjectCard";
import Spacer from "../components/util/Spacer";

function Dashboard({ route }) {
    const { projectsData } = route.params;

    function onPressHandler() {
        console.log('Pressed');
    }
  
    return (
    <FlatList
      contentContainerStyle={styles.projectsList}
      ItemSeparatorComponent={Spacer}
      data={projectsData}
      keyExtractor={(project) => project.id}
      renderItem={(project) => {
        return <ProjectCard name={project.item.name} onPress={onPressHandler} />;
      }}
    />
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  projectsList: {
    flex: 1,
  },
});
