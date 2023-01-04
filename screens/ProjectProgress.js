import { FlatList, Text, View, ScrollView, StyleSheet } from "react-native";
import ContentCard from "../components/dashboard/ContentCard";

import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectProgress({ route, navigation }) {
  const projectData = route.params.projectData;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.cardsContainer}>
        <DetailsHeader title="Progress" />
        <ContentCard title="Steps">
          <FlatList
            data={projectData.steps}
            keyExtractor={(item, index) => index}
            renderItem={(step) => <Text>{step.item}</Text>}
          />
        </ContentCard>
        <ContentCard title="Notes">
          <Text>{projectData.notes}</Text>
        </ContentCard>
      </ScrollView>
    </View>
  );
}

export default ProjectProgress;

const styles = StyleSheet.create({
    cardsContainer: {
        paddingHorizontal: 8,
    }
});
