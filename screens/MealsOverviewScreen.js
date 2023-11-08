import React, { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  })

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle
    })

  }, [catId, navigation])

  const renderMealItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability } = itemData.item
    const MealItemProps = {
      title,
      imageUrl,
      duration,
      complexity,
      affordability
    }

    return <MealItem {...MealItemProps} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})