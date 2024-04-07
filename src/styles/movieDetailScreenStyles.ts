import { StyleSheet } from "react-native";
import { globalColors } from "./globalStyles";

export const MovieDetailScreenStyles = StyleSheet.create({
  container: {
    paddingBottom: 40,
  },
  image: {
    width: "100%",
    height: 540,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  title: {
    marginBottom: 0,
    marginTop: 9,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "200",
    color: globalColors.lightWhite,
    marginVertical: 9,
  },
  genresContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 35,
  },
  genreButton: {
    backgroundColor: globalColors.lightWhite,
    width: 77,
    height: 26,
    borderRadius: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  genreText: {
    fontSize: 11,
    color: globalColors.white,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
});
