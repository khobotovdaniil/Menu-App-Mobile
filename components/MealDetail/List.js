import React from "react"
import { StyleSheet, View, Text } from "react-native"

import Colors from "../../constants/colors"

export const List = ({ data }) => {
  return data.map(item => (
    <View style={styles.listItem} key={item}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ))
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: Colors.MAIN_300
  },
  itemText: {
    color: Colors.MAIN_700,
    textAlign: 'center'
  }
})