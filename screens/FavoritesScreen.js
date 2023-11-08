import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { MealsList } from '../components/MealsList/MealsList'
import { MEALS } from '../data/dummy-data'
import { FavoritesContext } from "../store/context/favorites-context";
import Colors from '../constants/colors'

export default function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext)

  const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet...</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoriteMeals} />
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.MAIN_300
  }
})