import React, { useState, useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import InputComponent from "../components/InputComponent";
import { CardsContext } from "../context/cardContex";

export default function NewCardScreen({ navigation }) {
  const {addCard} = useContext(CardsContext)
  const [cardNum, setCardNum] = useState();
  const [name, setName] = useState("");
  const [cvv, setCvv] = useState();
  const [cardName, setCardName] = useState();
  const [expDate, setExpDate] = useState();

  const ignore = ()  => {
    const data = { cardNum: cardNum, name: name, cvv: cvv, cardName: cardName, expDate: expDate };
    addCard(data)
    navigation.pop()
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.text}>Edit Page</Text>
        <View style={styles.add}>
          <IconButton
            icon="plus-circle"
            color="#688e26"
            size={60}
            onPress={() => ignore()}
          />
        </View>
        <View style={styles.delete}>
          <IconButton
            icon="delete-circle"
            size={60}
            color="#ee5622"
            onPress={() => navigation.pop()}
          />
        </View>
      </View>
      <View style={styles.formView}>
        <Text style={styles.formLabel}>Card Name:</Text>
        <InputComponent
          value={cardName}
          keyboardType="default"
          textChange={setCardName}
        />
        <Text style={styles.formLabel}>Card Number:</Text>
        <InputComponent
          value={cardNum}
          keyboardType="number-pad"
          length={16}
          textChange={setCardNum}
        />
        <Text style={styles.formLabel}>Full Name:</Text>
        <InputComponent
          value={name}
          keyboardType="default"
          textChange={setName}
        />
        <View style={styles.formFoot}>
          <View style={styles.cvv}>
            <Text style={styles.formLabel}>CVV:</Text>
            <InputComponent
              type="cvv"
              value={cvv}
              keyboardType="number-pad"
              length={3}
              textChange={setCvv}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Date of Expiry:</Text>
            <InputComponent
              type="cvv"
              value={expDate}
              keyboardType="number-pad"
              placeholder={'MMYY'}
              length={4}
              textChange={setExpDate}
            />
          </View>
        </View>
      </View>
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
  },
  delete: {
    position: "absolute",
    bottom: 30,
    start: 240,
  },
  add: {
    position: "relative",
    bottom: 30,
    marginStart: "10%",
  },
  formView: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    marginLeft: "10%",
  },
  formLabel: {
    color: "#e8e9f3",
    fontWeight: "bold",
    fontSize: 25,
  },
  formFoot: {
    display: "flex",
    flexDirection: "row",
  },
  cvv: {
    position: "relative",
    marginEnd: 40
  }
});
