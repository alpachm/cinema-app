import { StyleSheet } from "react-native";

export const cardMoviesStyles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: 320,
    justifyContent: "space-between",
    marginBottom: 60,

  },
  poster: {
    width: 168,
    height: 258,
    borderRadius: 15,
    marginBottom: 5
  },
  containerStars: {
    flexDirection: "row",
    paddingLeft: 8,
  }
});
