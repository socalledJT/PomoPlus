import { Image, StyleSheet, Platform, View, TouchableOpacity } from 'react-native';
import router, { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { ThemedSafeAreaView } from '@/components/ThemendSafeAreaView';
import { AreaContainers } from '@/constants/AreaContainers'
import { Buttons } from '@/constants/Buttons';

export default function HomeScreen() {
  const router = useRouter()

  return (
    <ThemedSafeAreaView style={AreaContainers.backgroundContainer}>
      <TouchableOpacity style={Buttons.smallButton} onPress={() => {
        router.push('../screens/settings');
      }}>
        <Ionicons style={Buttons.icon} name="settings-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>

      <ThemedView style={AreaContainers.buttonContainer}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#2400FF', '#2D2E4D']}
        start={[0, 0.5]}
        end={[0.5, 1]}
        style={AreaContainers.profilecontainer}
        >
          <text>Test</text>
        </LinearGradient>
      </ThemedView>
    </ThemedSafeAreaView>
  )
}

const styles = StyleSheet.create({
  linearContainer: {
    width: "100%",
    height: "100%",
    color: "#fff",
    // align the icon of the button in the center
    alignItems: 'center',
    justifyContent: 'center'
  }
});
