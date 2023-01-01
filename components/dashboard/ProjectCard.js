import { StyleSheet, View, Text, Pressable } from "react-native";

function ProjectCard({ name, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
}

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ccc",
    padding: 16,
    width: "100%",
    borderRadius: 16,
    minHeight: 96, // For now
  },
});
