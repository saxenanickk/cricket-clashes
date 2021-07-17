import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Icon = ({ id, bg, size }) => {
  return (
    <View style={styles.container(bg, size)}>
      <Text>{id}</Text>
    </View>
  );
};

export { Icon };
