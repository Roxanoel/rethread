import { StyleSheet, View, Text } from "react-native";

function ProjectCard({ name }) {
    return (
        <View style={styles.card}>
            <Text>{name}</Text>
        </View>
    )
}

export default ProjectCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ccc',
        padding: 16, 
        width: '100%',
        borderRadius: 16,
        minHeight: 96,  // For now
    }
});