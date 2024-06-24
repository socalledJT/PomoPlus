import { StyleSheet } from "react-native";

export const Buttons = StyleSheet.create({
    smallButton: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        margin: 20,
        backgroundColor: 'transparent',
        width: 42,
        height: 42,
    
        // align the icon of the button in the center
        alignItems: 'center',
        justifyContent: 'center'
      },
      bigButton: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        margin: 35,
        backgroundColor: 'transparent',
        width: 65,
        height: 65,
    
        // align the icon of the button in the center
        alignItems: 'center',
        justifyContent: 'center'
      },
      icon: {
        // If i ever need to style icons
      },
      workButton: {
        width: 245,
        height: 70,

        borderRadius: 20,
        backgroundColor: '#112522',
        color: '#fff',

        // Fixing text size
        fontSize: 32,
        // align the text of the button in the center
        alignItems: 'center',
        justifyContent: 'center'
      },
      timerClicable: {
        width: 200,
        height: 125,

        padding: 15,

        borderRadius: 20,
        backgroundColor: '#112522',
        color: '#fff',
        margin: 20,

        // Fixing text size
        fontSize: 14,
      }
})
