import AsyncStorage from "@react-native-community/async-storage";

export function getKeys(): Promise<string[]> {
  return AsyncStorage.getAllKeys();
}

export function getData(key: string): Promise<string | null> {
  return AsyncStorage.getItem(key);
}

export function setData(key: string, value: string): Promise<void> {
  return AsyncStorage.setItem(key, value);
}
