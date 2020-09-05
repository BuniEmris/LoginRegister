import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Firebase from "../config/Firebase";
import { Feather } from "@expo/vector-icons";

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 8,
    width: 300,
    height: 48,
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderBottomWidth: 5,
    borderBottomColor: "green",
  },

  hideEye: {
    width: 30,
    height: 30,
  },
});

const Input = ({ icon, type, onChangeText }) => {
  const { inputContainer, hideEye, inputStyle } = styles;

  const [showPass, setShowPass] = useState(false);

  const myStyle = (size) =>
    ({
      hide: hideEye,
      input: inputContainer,
    }[size]);

  const showOrHide = () => {
    setShowPass(!showPass);
  };

  return (
    <View style={[myStyle(type), inputStyle]}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="type"
          secureTextEntry={showPass}
          onChangeText={onChangeText}
        />
        {icon ? (
          <TouchableOpacity onPress={showOrHide} style={styles.hideEye}>
            <Feather
              name={showPass ? "eye" : "eye-off"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export { Input };
