/* eslint-disable @typescript-eslint/indent */
import "../node_modules/react-native-svg/src/index.d.ts";
import { GestureResponderEvent, LayoutChangeEvent } from "react-native";

declare module "react-native-svg" {
  interface TouchableProps {
    cursor?:
      | "auto"
      | "crosshair"
      | "default"
      | "pointer"
      | "move"
      | "e-resize"
      | "nw-resize"
      | "n-resize"
      | "sw-resize"
      | "s-resize"
      | "w-resize"
      | "text"
      | "wait"
      | "help";
    onMouseDown?: (event: GestureResponderEvent) => void;
    onMouseUp?: (event: GestureResponderEvent) => void;
    onLayout?: (event: LayoutChangeEvent) => void;
  }
}
