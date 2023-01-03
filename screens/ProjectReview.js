import { Text, View } from "react-native";

import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectReview({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return (
        <View style={{flex: 1}}>
            <DetailsHeader title="Review" />
            <Text>{JSON.stringify(projectData)}</Text>
        </View>
    )}

export default ProjectReview;