// This is not needed it comes free with navigation 5.0
import React, { useEffect } from "react";
import { StackActions } from "@react-navigation/routers";

export const isMountedRef = React.createRef();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const navigationRef: React.RefObject<any> = React.createRef();

let isSet = false;
export const setMounted = (flag: boolean): void => {
  isSet = flag;
};

/**
 * A custom react hook to signal when the app has mounted / unmounted
 */
export function useRootNavigation(): void {
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);
}

export function replace(name: string): void {
  if (isSet && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.dispatch(StackActions.replace(name));
  } else {
    // do nuthin
  }
}

export function navigate(name: string, params?: string): void {
  if (isSet && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // do nuthin again
  }
}

// This is needed because when you create navigationRef above it uses type any and eslint yells at you for explicit any
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getRootNavigation() {
  if (!isSet) {
    // eslint-disable-next-line no-console
    console.warn("trying to fetch navigationRef before it is set");
  }
  return navigationRef.current;
}
