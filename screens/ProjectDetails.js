import { Text, View } from "react-native";
import { useLayoutEffect } from "react";

function ProjectDetails({ route, navigation }) {
    const projectData = route.params.project;
    
    useLayoutEffect(() => {
        navigation.setOptions({title: projectData.name});
      }, [navigation, projectData]);

    return (
        <View>
            <Text>{projectData.name}</Text>
        </View>
    )
}

export default ProjectDetails;