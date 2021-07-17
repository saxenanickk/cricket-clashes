const styles = {
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 5,
    borderTopRightRadius: 20,
    backgroundColor: "#2d2f36",
    justifyContent: "flex-end"
  },
  horizontalView: { flexDirection: "row", alignItems: "center" },
  subText: { color: "#707175", alignSelf: "center" },
  subTextHighlight: { color: "#a0a4d5" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerTitle: { color: "#d3d4d6", fontSize: 18 },
  crossButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  cross: { color: "#a0a4d5", fontSize: 18 }
};

export { styles };
