import { View, StyleSheet, Text } from "react-native";

import PALETTE from "../../assets/PALETTE";

function ContentCard({ children, title, color }) {
    const defaultColor = PALETTE.primary200;
  
    return (
    <View style={[styles.card, { backgroundColor: color? color: defaultColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default ContentCard;

const styles = StyleSheet.create({
    card: {
      padding: 16,
      width: "100%",
      borderRadius: 16,
      minHeight: 96, // For now
      marginBottom: 8, 
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: PALETTE.primary700, // For now, add support for customizing later 
      marginBottom: 8,
    }
  });
