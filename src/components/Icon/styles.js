const styles = {
  container: (bg, size = 30) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bg ?? "#ff0000"
  })
};

export { styles };
