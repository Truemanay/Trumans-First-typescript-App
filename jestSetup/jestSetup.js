/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
/* eslint-disable no-undef */
import { NativeModules as RNNativeModules } from "react-native";
import mockAsyncStorage from "@react-native-community/async-storage/jest/async-storage-mock";

jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));

jest.mock("@react-native-community/async-storage", () => mockAsyncStorage);
