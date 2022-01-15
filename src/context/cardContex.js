import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

function uuidv4(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

export const CardsContext = createContext();

const CardContextProvider = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const jsCards = await AsyncStorage.getItem('@cards');
      jsCards != null ? setCards(JSON.parse(jsCards)) : null;
    }
    getCards()
  },[])

  useEffect(() => {
    const store = async () => {
      const jsCard = JSON.stringify(cards);
      await AsyncStorage.setItem('@cards', jsCard);
    }
    store();
  },[cards])

  const removeCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const addCard = (card) => {
    setCards([
      ...cards,
      {
        id: uuidv4(),
        cardNum: card.cardNum,
        name: card.name,
        cvv: card.cvv,
        expDate: card.expDate,
        cardName: card.cardName
      },
    ]);
  };

  return (
    <CardsContext.Provider value={{ cards, removeCard, addCard }}>
      {props.children}
    </CardsContext.Provider>
  );
};

export default CardContextProvider;
