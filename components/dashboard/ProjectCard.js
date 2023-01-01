import { StyleSheet, View, Text, Pressable } from "react-native";
import PALETTE from "../../assets/PALETTE";

function ProjectCard({ name, onPress, color }) {
  
    return (
    <Pressable onPress={onPress}>
      <View style={[styles.card, {backgroundColor: color}]}>
        <Text style={styles.cardTitle}>{name}</Text>
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
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: PALETTE.primary700 // For now, add support for customizing later 
  }
});
