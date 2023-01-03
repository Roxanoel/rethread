import { Text } from "react-native";

function ProjectProgress({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return <Text>{JSON.stringify(projectData)}</Text>
}

export default ProjectProgress;