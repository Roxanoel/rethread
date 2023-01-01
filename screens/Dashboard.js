import { FlatList, Text } from "react-native";

function Dashboard({ projectsData }) {

  return (
    <FlatList
      data={projectsData}
      keyExtractor={(project) => project.id}
      renderItem={(project) => { 
        return (<Text>{project.item.name}</Text>);
      }}
    />
  );
}

export default Dashboard;
