import React, { useLayoutEffect, useContext } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
// import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { IconButton } from '../components/IconButton'
import { FavoritesContext } from "../store/context/favorites-context";
// import { addFavorite, removeFavorite } from '../store/redux/favorites'

export default function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext)
  // const favoriteMealIds = useSelector(state => state.favoriteMeals.ids)
  // const dispatch = useDispatch()

  const mealId = route.params.mealId

  const {
    imageUrl,
    title,
    duration,
    complexity,
    affordability,
    ingredients,
    steps
  } = MEALS.find(meal => meal.id === mealId)

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)
  // const mealIsFavorite = favoriteMealIds.includes(mealId)

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId)
      // dispatch(removeFavorite({ id: mealId }))
    } else {
      favoriteMealsCtx.addFavorite(mealId)
      // dispatch(addFavorite({ id: mealId }))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavoriteStatusHandler}
          />
        )
      }
    })
  }, [navigation, changeFavoriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingridients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%'
  }
})