import { Text, View, ScrollView, StyleSheet } from "react-native";

import ContentCard from "../components/dashboard/ContentCard";
import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectReview({ route, navigation }) {
  const projectData = route.params.projectData;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.cardsContainer}>
      <DetailsHeader title="Review" />
        <ContentCard title="Images">
          <Text>{JSON.stringify(projectData.images)}</Text>
        </ContentCard>
        <ContentCard title="What Went Well">
          <Text>{projectData.whatWentWell}</Text>
        </ContentCard>
        <ContentCard title="What I learned">
          <Text>{projectData.learned}</Text>
        </ContentCard>
        <ContentCard title="What I Want to Improve">
          <Text>{projectData.whatToImprove}</Text>
        </ContentCard>
        <ContentCard title="Would I Do it Again?">
          <Text>{projectData.wouldRedo ? "yes" : "no"}</Text>
        </ContentCard>
      </ScrollView>
    </View>
  );
}

export default ProjectReview;

const styles = StyleSheet.create({
    cardsContainer: {
        paddingHorizontal: 8,
    }
});