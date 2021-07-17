import React from "react";
import { View } from "react-native";
import { Spacer } from "../../components";
import { BottomAction } from "../../containers/BottomAction";
import { Knockout } from "../../containers/Knockout";
import { Stats } from "../../containers/Stats";
import { Tournaments } from "../../containers/Tournaments";

const Home = () => {
  return (
    <View style={styles.container}>
      <Tournaments />
      <Spacer size={20} />
      <Knockout />
      <Spacer size={20} />
      <Stats />
      <BottomAction />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#212226",
    paddingHorizontal: 10,
    paddingTop: 10
  }
}

export { Home };
