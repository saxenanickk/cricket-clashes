import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity
} from "react-native";
import { Button, Spacer, Icon, HrLine } from "../../components";
import { styles } from "./styles";

const BottomAction = () => {
  const [isClick, setClick] = useState(false);
  const value = useRef(new Animated.Value(0));

  useEffect(() => {
    if (!isClick && value.current) {
      animation(0);
    }
  }, [isClick]);

  const animation = (toValue) => {
    Animated.timing(value.current, {
      toValue: toValue,
      duration: 200,
      easing: Easing.easeInEaseOut,
      useNativeDriver: true
    }).start(() => toValue === 1 && setClick(true));
  };

  const animatedHeight = value.current.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 200]
  });

  const animatedTopLeftRadius = value.current.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20]
  });

  const animatedFontSize = value.current.interpolate({
    inputRange: [0, 1],
    outputRange: [12, 0]
  });

  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderTopLeftRadius: animatedTopLeftRadius,
          height: animatedHeight
        }
      ]}
    >
      {isClick ? (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{"Confirm Payment"}</Text>
            <TouchableOpacity
              style={styles.crossButton}
              onPress={() => setClick(false)}
            >
              <Text style={styles.cross}>{"x"}</Text>
            </TouchableOpacity>
          </View>
          <Spacer size={5} />
          <HrLine />
          <Spacer size={20} />
          <View
            style={[styles.horizontalView, { justifyContent: "space-between" }]}
          >
            <Text style={{ color: "#d3d4d6" }}>Entry Fee</Text>
            <Text style={{ color: "#d3d4d6" }}>
              <Icon id={"R"} size={15} bg={"#8c7c41"} />
              {" 10"}
            </Text>
          </View>
          <View
            style={[styles.horizontalView, { justifyContent: "space-between" }]}
          >
            <Text style={{ color: "#83dec4" }}>You are paying</Text>
            <Text style={{ color: "#83dec4" }}>
              <Icon id={"R"} size={15} bg={"#8c7c41"} />
              {" 10"}
            </Text>
          </View>
          <Spacer size={20} />
          <HrLine />
          <Spacer size={20} />
        </View>
      ) : null}
      <Button
        isFull={true}
        onPress={() => {
          isClick ? setClick(false) : animation(1);
        }}
      >
        <View style={styles.horizontalView}>
          {isClick ? (
            <Text>{"Register & Pay"}</Text>
          ) : (
            <>
              <Text>{"Pay with "}</Text>
              <Icon id={"T"} size={20} bg={"#8c7c41"} />
              <Text>{" 10"}</Text>
            </>
          )}
        </View>
      </Button>
      <Spacer size={10} />
      {!isClick ? (
        <Animated.Text style={[styles.subText, { fontSize: animatedFontSize }]}>
          Registraton closes in
          <Text style={styles.subTextHighlight}>{" 2h 13m"}</Text>
        </Animated.Text>
      ) : null}
    </Animated.View>
  );
};

export { BottomAction };
