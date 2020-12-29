import { StyleSheet } from "react-native";

export const kColor = {
  color: "#86C058",
};

export const kFont = StyleSheet.create({
  headerFont: {
    fontSize: 40,
    fontWeight: "bold",
  },
});

const kStyles = {
  kPadding: 10,
  kSmallCircle: { height: 100, width: 100 },
  kCircle: { height: 200, width: 200 },
  kButton: { height: 90, width: 200 },
  kBackButton: { height: 100, width: 100 },
};

export const styles = StyleSheet.create({
  P01Button: {
    ...kStyles.kButton,
    textAlign: "center",
  },
  P01Circle: {
    ...kStyles.kCircle,
  },
  P01CircleSmaller: {
    ...kStyles.kSmallCircle,
  },
  P01Container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  P01Header: {
    backgroundColor: kColor.color,
    paddingTop: 3 * kStyles.kPadding,
  },
  P01Instructions: {
    paddingTop: 5 * kStyles.kPadding,
    textAlign: "center",
  },
  P01Text: {
    ...kFont.headerFont,
    textAlign: "center",
  },
  P02Button: {
    ...kStyles.kBackButton,
    alignSelf: "flex-start",
    position: "absolute",
    top: 0,
    zIndex: 10,
  },
  P02Container: {
    alignItems: "center",
    justifyContent: "center",
  },
  P02Image: {
    height: "100%",
    width: "100%",
  },
});
