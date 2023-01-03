import { Text } from "react-native";

function ProjectReview({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return <Text>{JSON.stringify(projectData)}</Text>
}

export default ProjectReview;