import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { Colors } from '@/constants/Colors';

export default function NotificationsScreen() {
  // const colorScheme = useColorScheme();
  // const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style={[styles.container]}>
      <Text style={styles.text}>Page is not ready yet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#154852'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
});
