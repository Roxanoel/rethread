import { FlatList, Text } from "react-native";
import ProjectCard from "../components/dashboard/ProjectCard";

function Dashboard({ projectsData }) {

  return (
    <FlatList
      data={projectsData}
      keyExtractor={(project) => project.id}
      renderItem={(project) => { 
        return (<ProjectCard name={project.item.name} />);
      }}
    />
  );
}

export default Dashboard;
