import React from "react";
import { View, Text } from "react-native";
import { Icon, Spacer } from "../../components";
import { styles } from "./styles";

const Knockout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ogIcon} />
      <View style={styles.details}>
        <Text style={styles.title}>{"Knockout"}</Text>
        <View style={styles.row}>
          <Icon id={"M"} size={20} bg={"#83dec4"} />
          <Spacer size={5} direction={"horizontal"} />
          <Icon id={"T"} size={20} bg={"#8c7c41"} />
          <Spacer size={5} direction={"horizontal"} />
          <Text style={styles.content}>{"90 in prizes"}</Text>
        </View>
        <View style={styles.row}>
          <Icon id={"P"} size={20} bg={"#8c7c41"} />
          <Spacer size={5} direction={"horizontal"} />
          <Text style={styles.content}>{"2-10 games"}</Text>
        </View>
      </View>
    </View>
  );
};

export { Knockout };
