import React, { useContext } from "react";
import { View, Text, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import { IconButton } from "react-native-paper";
import Card from "../components/Card";
import { ScrollView } from "react-native-gesture-handler";
import {CardsContext} from "../context/cardContex";

export default function HomeScreen({ navigation }) {
  const {cards} = useContext(CardsContext)
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Home Page</Text>
        <View style={styles.plusView}>
          <IconButton
            icon="plus-circle"
            size={60}
            color="#eca73c"
            onPress={() => navigation.push('edit')}
          />
        </View>
      </View>
      <ScrollView>
      {cards.map(item => {
        return <Card key={item.id} id={item.id} cardNumber={item.cardNum} cvv={item.cvv} expDate={item.expDate} holder={item.name}/>
      })}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272635",
  },
  text: {
    fontWeight: "bold",
    color: "#e8e9f3",
    fontSize: 32,
  },
  textView: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    marginTop: "15%",
    marginLeft: "10%",
    maxHeight: 75
  },
  plusView: {
    position: "relative",
    marginStart: "15%",
    bottom: 30
  },
});
