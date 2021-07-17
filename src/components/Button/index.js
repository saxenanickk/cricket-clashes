import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

const Button = ({ title, isFull, onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container(isFull)}>
        <Text>{title}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export { Button };
