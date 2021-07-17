import React from "react";
import { View } from "react-native";

const Spacer = ({ size, direction }) => {
  return (
    <View
      style={{
        flexDirection: direction === "horizontal" ? "row" : "column",
        ...(direction === "horizontal" ? { width: size } : { height: size })
      }}
    />
  );
};

export { Spacer };
