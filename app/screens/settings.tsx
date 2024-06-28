import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { Component } from 'react'
import { useRouter } from "expo-router";

export default function Settings() {
    const router = useRouter()

    return (
      <View>
        <Text>settings</Text>
        <TouchableOpacity onPress={() => {
            router.back()
        }}>
            <Text>Home</Text>
        </TouchableOpacity>
      </View>
    )
}
