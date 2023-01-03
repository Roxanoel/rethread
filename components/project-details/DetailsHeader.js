import { Text, StyleSheet, View } from "react-native";

function DetailsHeader({ title }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{title}</Text>
      </View>
    </View>
  );
}

export default DetailsHeader;

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    headerContainer: {
        paddingHorizontal: 24,
        paddingVertical: 16,
        margin: 24,
        backgroundColor: "#ccc",
        borderRadius: 16,
    },
    header: {
        fontSize: 16,
        fontWeight: "bold", 
    },
});
