import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { TimerProvider } from './src/contexts/TimerContext';
import { TimerDefinitionScreen } from './src/screens/TimerDefinitionScreen';
import { TimerScreen } from './src/screens/TimerScreen';
import { colors } from './src/styles/colors';

export default function App() {
  return (
    <TimerProvider>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        {/* <TimerDefinitionScreen /> */}
        <TimerScreen />
      </SafeAreaView>
    </TimerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
