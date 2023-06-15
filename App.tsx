import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { hello, getTheme, setTheme } from './modules/test-module';
//import * as Settings from 'expo-settings';

export default function App() {
  const theme = getTheme();
  // Toggle between dark and light theme
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test for native module </Text>
      {/* <Text>hello world form one: {Settings.hello()}</Text> */}
      <Text>hello world form two: {hello()}</Text>
      <Text>Theme: {getTheme()}</Text>
      <Button title={`Set theme to ${nextTheme}`} onPress={() => setTheme(nextTheme)} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
