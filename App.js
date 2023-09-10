import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Display from "./src/pages/display/Display";


export default function App() {

  return (
    <>
      <StatusBar hidden={true} />
      <Display />
    {/* <Iniciodb /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
