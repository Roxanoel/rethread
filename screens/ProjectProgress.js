import { Text, View } from "react-native";

import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectProgress({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return (
        <View style={{flex: 1}}>
            <DetailsHeader title="Progress" />
            <Text>{JSON.stringify(projectData)}</Text>
        </View>
    )}

export default ProjectProgress;