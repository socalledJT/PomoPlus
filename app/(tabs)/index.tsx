import { Image, StyleSheet, Platform, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useRef, useState } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedSafeAreaView } from '@/components/ThemendSafeAreaView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Buttons } from '@/constants/Buttons';

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null); // Explicitly define the type
  const [buttonWidth, setButtonWidth] = useState(0);

  useEffect(() => {
    if (buttonWidth) {
      // Calculate offset to scroll to the middle button
      const screenWidth = Dimensions.get('window').width;
      const middleButtonOffset = (buttonWidth * 2) - (screenWidth / 2 - buttonWidth / 2);

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({ x: 250, animated: true });
      }
    }
  }, [buttonWidth]);

  return (
    <ThemedSafeAreaView style={styles.areaContainer}>
      <TouchableOpacity style={Buttons.smallButton}>
        <Ionicons style={Buttons.icon} name="settings-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <ThemedView style={styles.buttonContainer}>
        <TouchableOpacity style={Buttons.workButton}>
          Start Work
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.bigButtonContainer}>
        <ThemedView style={styles.bigButtonNestedContainer}>
          <TouchableOpacity style={Buttons.bigButton}>
            <Ionicons style={Buttons.icon} name="accessibility-outline" size={32} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity style={Buttons.bigButton}>
            <Ionicons style={Buttons.icon} name="grid-outline" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.timerContainer}>
        <ScrollView horizontal={true}  ref={scrollViewRef}>
          <TouchableOpacity style={Buttons.timerClicable}>
            Start Work
          </TouchableOpacity>
          <TouchableOpacity style={Buttons.timerClicable}>
            Start Work
          </TouchableOpacity>
          <TouchableOpacity style={Buttons.timerClicable}>
            Start Work
          </TouchableOpacity>
        </ScrollView>
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaContainer: {
    height: '100%',
    width: '100%'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  buttonContainer: {
    width: '100%',
    height: '20%',
    // align the text of the button in the center
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: '#000'    // Used for styiling
  },
  bigButtonContainer: {
    width: '100%',
    height: '10%',
    marginTop: 50,
    // align the text of the button in the center
    alignItems: 'center',
    justifyContent: 'center',

    // backgroundColor: '#fff'    // Used for styiling
  },
  bigButtonNestedContainer: {
    width: '60%',
    // align the text of the button in the center
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row'
  },
  timerContainer: {
    width: '100%',
    height: '30%',
    marginTop: 150,
    // align the text of the button in the center
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",

    // backgroundColor: '#000'    // Used for styiling
  },
});
