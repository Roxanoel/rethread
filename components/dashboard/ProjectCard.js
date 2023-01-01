import { StyleSheet, View, Text, Pressable } from "react-native";

function ProjectCard({ name, onPress, color }) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, {backgroundColor: color}]}>
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
}

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    width: "100%",
    borderRadius: 16,
    minHeight: 96, // For now
  },
});
