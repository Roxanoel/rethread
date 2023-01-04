import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import ContentCard from "../components/dashboard/ContentCard";

import DetailsHeader from "../components/project-details/DetailsHeader";

function ProjectPlanning({ route, navigation }) {
  const projectData = route.params.projectData;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.cardsContainer}>
        <DetailsHeader title="Planning" />
        <ContentCard title="Pattern information">
          <Text>Pattern: {projectData.pattern}</Text>
          <Text>Size: {projectData.size}</Text>
          <Text>If photo, path: {projectData.patternPhotoPath}</Text>
        </ContentCard>
        <ContentCard title="Fabric Ideas">
          <FlatList
            data={projectData.fabricIdeas}
            keyExtractor={(fabric, index) =>
              fabric.fabricName + index.toString()
            }
            renderItem={(fabric) => <Text>{JSON.stringify(fabric.item)}</Text>}
          />
        </ContentCard>
        <ContentCard title="Notions">
          <FlatList
            data={projectData.notions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(notion) => <Text>{JSON.stringify(notion.item)}</Text>}
          />
        </ContentCard>
        <ContentCard title="Notes">
          <Text>{projectData.notes}</Text>
        </ContentCard>
      </ScrollView>
    </View>
  );
}

export default ProjectPlanning;

const styles = StyleSheet.create({
  cardsContainer: {
    padding: 8,
  },
});
