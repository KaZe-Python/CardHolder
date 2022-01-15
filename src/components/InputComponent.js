import React from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";

const InputComponent = ({ type, value, textChange, keyboardType, length, placeholder }) => {
  if (type) {
    return (
      <KeyboardAvoidingView>
        <TextInput
          style={[styles.container, {width: Dimensions.get("screen").width * .3}]}
          value={value}
          onChangeText={(t) => textChange(t)}
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor='#fff'
          keyboardType={keyboardType}
          maxLength={length}
        />
      </KeyboardAvoidingView>
    );
  }
  return (
    <KeyboardAvoidingView>
      <TextInput
        style={styles.container}
        value={value}
        onChangeText={(t) => textChange(t)}
        autoCorrect={false}
        keyboardType={keyboardType}
        maxLength={length}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width * 0.7,
    borderBottomWidth: 1.8,
    borderBottomColor: "#fff",
    fontSize: 18,
    marginBottom: 30,
    marginTop: 4,
    fontWeight: "600",
    opacity: .4,
    color: "#fff",
  }
});

export default InputComponent;
