import React from "react";
import { StyleSheet, Pressable, View, Text, Image, Platform } from "react-native";

export const MealItem = ({ title, imageUrl, duration, complexity, affordability }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: imageUrl }}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}, m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    height: 200,
    width: '100%'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
})