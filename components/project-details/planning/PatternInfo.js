import { View, StyleSheet, Text } from "react-native";

function PatternInfo({patternName, size, photo}) {
    return (
    <View style={styles.rootContainer} >
        <View style={styles.innerContainer}>
            <Text>{patternName}</Text>
            <Text>Size: {size}</Text>
        </View>
        <View style={styles.image}>
            {!photo && <View />  /*Add empty state later*/}  
        </View>
    </View>
    );
}

export default PatternInfo;

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerContainer: {},
    image: {
        height: 100,
        width: 100, 
        backgroundColor: 'lightgrey',
        borderRadius: 16,
    },
});