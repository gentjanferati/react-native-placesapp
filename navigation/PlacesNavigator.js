import React from "react";
import { Platform,TouchableOpacity, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();
function PlacesNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="PlacesListScreen">
      <Stack.Screen
        name="PlacesListScreen"
        component={PlacesListScreen}
        options={{
          title: "All Places"
        }}
      />
      <Stack.Screen
        name="PlaceDetailScreen"
        component={PlaceDetailScreen}
        options={{ title: "Place Details" }}
      />
      <Stack.Screen name="NewPlaceScreen" component={NewPlaceScreen} options={{ title: "Add a new place" }}/>
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default PlacesNavigator;
