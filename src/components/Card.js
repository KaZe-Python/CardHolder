import React, {useContext, useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform } from "react-native";
import {CardsContext} from "../context/cardContex";

function cNum(cardNumber) {
  if (cardNumber) {
    return Array.from(cardNumber).reduce((accum, cur, idx) => {
      return (accum += (idx + 1) % 4 === 0 ? cur + " " : cur);
    }, "");
  }
  return Array.from(
    Math.floor(
      Math.pow(10, 15) +
        Math.random() * (Math.pow(10, 16) - Math.pow(10, 15) - 1)
    ).toString()
  ).reduce((accum, cur, idx) => {
    return (accum += (idx + 1) % 4 === 0 ? cur + " " : cur);
  }, "");
}

const Card = ({ id, cardNumber, holder, expDate, cvv }) => {
  const {removeCard} = useContext(CardsContext)
  const [show, setShow] = useState(false)

  let showStyle = [];
  if(Platform.OS === 'android' && !show){
    showStyle.push({opacity: 0})
  }else if (show){
    showStyle.pop();
  }else {
    showStyle.push({display: 'none'})
  }

  const formattedCardNum = cNum(cardNumber)

  return (
    <TouchableOpacity
      onLongPress={() => removeCard(id)}
      onPress={() => setShow(!show)}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          <View>
            <Text style={styles.cardNumber}>
              {formattedCardNum}
            </Text>
          </View>
          <View style={[styles.cvv, showStyle]}>
            <Text>CVV: <Text style={{fontWeight: "bold"}}>{cvv}</Text></Text>
          </View>
          <View style={styles.info}>
            <View style={{overflow: 'scroll'}}>
            <Text style={styles.holder}>{holder}</Text>
            </View>
            <Text style={styles.expDateText}>Exp Date: </Text>
            <Text style={styles.expDate}>
              {expDate.slice(0, expDate.length - 2) +
                "/" +
                expDate.slice(expDate.length - 2)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eca72c",
    display: "flex",
    flexDirection: "column",
    marginStart: 20,
    marginEnd: 20,
    borderRadius: 40,
    height: 200,
    overflow: "hidden",
    marginTop: 20,
  },
  cardNumber: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    marginStart: 25,
    marginTop: 25,
  },
  info: {
    position: "relative",
    flexDirection: "row",
    marginTop: 105,
  },
  holder: {
    fontWeight: "bold",
    fontSize: 20,
    opacity: 0.8,
  },
  expDateText: {
    position: "absolute",
    start: 170,
    top: 8,
    fontWeight: "bold",
  },
  expDate: {
    position: "absolute",
    marginStart: "78%",
    marginTop: 8,
    fontSize: 15,
    opacity: 0.5,
  },
  cvv:{
    position: "absolute",
    marginTop: 30,
  }
});

export default Card;
