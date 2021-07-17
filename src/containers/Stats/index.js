import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const Stats = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "#818286" }}>{"Format"}</Text>
        <Text style={{ color: "#d3d4d6" }}>{"ODIs"}</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={{ color: "#83dec4" }}>{"Rank"}</Text>
        <Text style={{ color: "#83dec4" }}>{"-"}</Text>
      </View>

      <View style={{ alignItems: "flex-end" }}>
        <Text style={{ color: "#818286" }}>{"%Winners"}</Text>
        <Text style={{ color: "#d3d4d6" }}>{"40%"}</Text>
      </View>
    </View>
  );
};

export { Stats };
