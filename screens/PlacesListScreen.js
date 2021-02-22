import * as React from "react";
import { FlatList, Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import PlaceItem from "../components/PlaceItem";
const PlacesListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);

  return (
    <View>
    <View style={{ positon: "absolute" }}>
        
    <View style={{borderWidth: 5, borderColor: '#25E5E2' }}>
      <Pressable
          style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}
          onPress={() => navigation.navigate("NewPlaceScreen")}
        >
          <Text style={{color:'#25E5E2', fontSize: 25}}>Add place</Text>
          <Ionicons name="md-add-circle-outline" size={50} color="#25E5E2" />
          
        </Pressable>
        </View>
    </View>
    <FlatList
      data={places}
      keyExtrator={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={null}
          title={itemData.item.title}
          address={null}
          onSelect={() => {
            navigation.navigate("PlaceDetailScreen", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    >
    </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
