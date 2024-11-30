import { Image, StyleSheet, Platform, View, TouchableOpacity, Text } from 'react-native';
import router, { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

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
        colors={['rgba(45, 46, 77, 1)', 'rgba(36, 0, 255, 0.7)']}
        start={[0, 0.5]}
        end={[0.5, 1]}
        style={AreaContainers.profilecontainer}
        >
          <View>
            <Image style={styles.profileImage}></Image> {/*source={require('./assets/images/Placeholder.png')} />*/}
          </View>
          <View>
            <Text style={styles.profileNameText}>JohnnyTm</Text>
          </View>
          <View>
            <Text style={styles.profileLevelText}>Level: 69</Text>
          </View>
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
  },
  profileNameText: {
    color: '#fff'
  },
  profileLevelText: {
    color: '#C4C4C4',
    fontSize: 10,

    marginTop: 3
  },
  profileImage: {
    backgroundColor: "black",
    width: 100,
    height: 100,

    borderRadius: 100,
    marginTop: -60,
    marginBottom: 15
  }
});
