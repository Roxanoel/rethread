import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Dashboard from './screens/Dashboard';

import * as MOCKDATA from './dev/mock-data.json';

export default function App() {
  const projects = JSON.parse(JSON.stringify(MOCKDATA.projects));

  return (
    <SafeAreaView style={styles.container}>
      <Dashboard projectsData={projects} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
