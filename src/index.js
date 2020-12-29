import { AppRegistry } from "react-native";
import App from "./App";

/**
 * Calls the Web App
 */

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root"),
});
