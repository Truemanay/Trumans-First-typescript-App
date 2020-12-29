import ReactNativeHapticFeedback from "react-native-haptic-feedback";

/**
 * Trigger a haptic feedback tick effect on supported devices
 */
export const tick = (): void => {
  ReactNativeHapticFeedback.trigger("impactLight", {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  });
};
