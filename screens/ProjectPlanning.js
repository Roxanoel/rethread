import { Text, View } from "react-native";

import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectPlanning({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return (
        <View style={{flex: 1}}>
            <DetailsHeader title="Planning" />
            <Text>{JSON.stringify(projectData)}</Text>
        </View>
    )
}

export default ProjectPlanning;