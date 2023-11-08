import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CategoryGridTile } from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data';

export default function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    const { title, color, id } = itemData.item;

    const pressHandler = () => {
      navigation.navigate('MealsOverview', {
        categoryId: id,

      })
    }

    return (
      <CategoryGridTile
        title={title}
        color={color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  )
}

const styles = StyleSheet.create({

})
