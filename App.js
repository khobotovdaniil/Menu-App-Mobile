import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
// import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen'
import Colors from './constants/colors';
import FavotiteContextProvider from './store/context/favorites-context';
// import { store } from './store/redux/store'


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: Colors.MAIN_700 },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: Colors.MAIN_500 },
      drawerContentStyle: { backgroundColor: Colors.MAIN_700 },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: Colors.MAIN_700,
      drawerActiveBackgroundColor: Colors.MAIN_300
    }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          )
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavotiteContextProvider>
        {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colors.MAIN_700 },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: Colors.MAIN_500 },
          }}>
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={{
                title: 'About the Meal'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </Provider> */}
      </FavotiteContextProvider>
    </>
  )
}
