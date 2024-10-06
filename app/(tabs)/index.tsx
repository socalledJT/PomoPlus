import { View, Image, StyleSheet, Platform, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedSafeAreaView } from '@/components/ThemendSafeAreaView';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Buttons } from '@/constants/Buttons';
import { router } from 'expo-router';
import { AreaContainers } from '@/constants/AreaContainers';

// const convertMinutesToTime = (minutes: number) => {
//   const hrs = Math.floor(minutes / 60);
//   const mins = minutes % 60;
//   const secs = 0;

//   return `${hrs} Hrs, ${mins} Min, ${secs} Sec`;
// };

const convertMinutesArrayToTime = (minutesArray: any[]) => {
  return minutesArray.map(minutes => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const secs = 0;
    return `${hrs} Hrs, ${mins} Min, ${secs} Sec`;
  });
};

export default function HomeScreen() {
  const router = useRouter();

  const minutesArray = [10, 24, 15]; // Array with 3 variables
  const convertedTimes = convertMinutesArrayToTime(minutesArray);

  return (
    <ThemedSafeAreaView style={AreaContainers.backgroundContainer}>
      <TouchableOpacity style={Buttons.smallButton} onPress={() => {
        router.push('../screens/settings');
      }}>
        <Ionicons style={Buttons.icon} name="settings-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <ThemedView style={AreaContainers.buttonContainer}>
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
        <ScrollView style={styles.scrollContainer} horizontal={true} snapToAlignment="center" scrollEventThrottle={1}>
          <TouchableOpacity key={0} style={Buttons.timerClicable}>
            Break
            <View style={styles.lineStyle}></View>
            <View style={styles.timerTextContainer}>
              <text>{convertedTimes[0]}</text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity key={1} style={Buttons.timerClicable}>
            Work
            <View style={styles.lineStyle}></View>
            <View style={styles.timerTextContainer}>
              <text>{convertedTimes[1]}</text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity key={2} style={Buttons.timerClicable}>
            Stretch
            <View style={styles.lineStyle}></View>
            <View style={styles.timerTextContainer}>
              <text>{convertedTimes[2]}</text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </ThemedView>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",

    // backgroundColor: '#000'    // Used for styiling
  },
  scrollContainer: {
    width: "50%",

    // backgroundColor: "white"
  },
  lineStyle:{
    width: "100%",
    borderWidth: 0.5,
    borderColor:'#163430',
    marginTop: 10,
  },
  timerTextContainer: {
    alignItems: "center",
    justifyContent: "center",

    width: '100%',
    height: "70%",
    // backgroundColor: "black",
  }
});
