import { FlatList, Text, View } from "react-native";
import ContentCard from "../components/dashboard/ContentCard";

import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectProgress({ route, navigation }) {
    const projectData = route.params.projectData;
    
    return (
        <View style={{flex: 1}}>
            <DetailsHeader title="Progress" />
            <ContentCard title="Steps">
                <FlatList data={projectData.steps} keyExtractor={(item, index) => index} renderItem={(step) => <Text>{step.item}</Text>} />
            </ContentCard>
            <ContentCard title="Notes">
                <Text>{projectData.notes}</Text>
            </ContentCard>
        </View>
    )}

export default ProjectProgress;