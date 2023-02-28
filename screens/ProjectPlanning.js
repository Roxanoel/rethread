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
          {projectData.fabricIdeas.map((fabric, index) => {
            return <Text key={fabric.fabricName + index}>{JSON.stringify(fabric)}</Text>
          })}
        </ContentCard>
        <ContentCard title="Notions">
          {projectData.notions.map((notion, index) => {
            return <Text key={index}>{JSON.stringify(notion)}</Text>
          })}
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
