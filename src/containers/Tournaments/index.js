import React from "react";
import { View } from "react-native";
import { TournamentCard } from "../../components";

/**
 * Tournaments component
 * Currently, I kept only 2 items
 * but, it can be scaled to pass an array of tournaments if required.
 */
const Tournaments = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <TournamentCard
        logo={{ id: "$", color: "#83dec4" }}
        title={"Rs. 209"}
        subTitle={"Cash"}
        actionTitle={"Add"}
        action={() => {}}
      />
      <TournamentCard
        logo={{ id: "T", color: "#8c7c41" }}
        title={"1680"}
        subTitle={"Tokens"}
        actionTitle={"Earn"}
        action={() => {}}
      />
    </View>
  );
};

export { Tournaments };
