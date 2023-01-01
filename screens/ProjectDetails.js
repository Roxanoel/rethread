import { Text, View } from "react-native";

function ProjectDetails({ route }) {
    const projectData = route.params.project;
    
    return (
        <View>
            <Text>{projectData.name}</Text>
        </View>
    )
}

export default ProjectDetails;