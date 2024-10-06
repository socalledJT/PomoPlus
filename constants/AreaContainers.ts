import { StyleSheet } from "react-native";

export const AreaContainers = StyleSheet.create({
    backgroundContainer: {
        height: '100%',
        width: '100%'
    },
    profilecontainer: {
        // borderWidth: 1,
        // borderColor: '#000000',
        borderRadius: 20,
        margin: 20,
        // backgroundColor: 'transparent',
        width: 240,
        height: 120,
    
        // align the icon of the button in the center
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        width: '100%',
        height: '20%',
        // align the text of the button in the center
        alignItems: 'center',
        justifyContent: 'center',
    
        // backgroundColor: '#000'    // Used for styiling
      },
})