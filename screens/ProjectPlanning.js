import { Text, View } from "react-native";

function ProjectPlanning({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return (
        <View style={{flex: 1}}>
            <Text>{JSON.stringify(projectData)}</Text>
        </View>
    )
}

export default ProjectPlanning;