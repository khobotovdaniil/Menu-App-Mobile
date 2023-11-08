import React from "react"
import { StyleSheet, View, Text } from "react-native"

import Colors from "../../constants/colors"

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.MAIN_300,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 4,
    textAlign: 'center'
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: Colors.MAIN_300,
    borderBottomWidth: 2
  }
})