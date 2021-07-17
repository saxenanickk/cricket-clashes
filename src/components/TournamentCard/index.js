import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Icon } from "../Icon";
import { Button } from "../Button";
import { Spacer } from "../Spacer";

const TournamentCard = ({ logo, title, subTitle, actionTitle, action }) => {
  return (
    <View style={styles.container}>
      <Icon id={logo?.id} bg={logo?.color} />
      <Spacer size={10} />
      <Text style={{ color: "#d3d4d6", fontSize: 18 }}>{title}</Text>
      <Spacer size={10} />
      <Text style={{ color: "#818286", fontSize: 12 }}>{subTitle}</Text>
      <Spacer size={10} />
      <Button title={actionTitle} onPress={action} />
    </View>
  );
};

export { TournamentCard };
