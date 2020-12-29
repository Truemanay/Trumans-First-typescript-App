/**
 * Define action creators here 'actions.ts'
 */
/** *** */
import {
  SAMPLE_FETCH_ERROR,
  SAMPLE_FETCH_LOADING,
  SAMPLE_FETCH_SUCCESS,
} from "./constants";
import { tSampleDispatch } from "./types";

export function fetchSomething() {
  return async (dispatch: tSampleDispatch): Promise<void> => {
    try {
      dispatch({ type: SAMPLE_FETCH_LOADING });
      // Do something async (i.e. wait a second)
      await new Promise((r) => setTimeout(r, 1000));
      dispatch({ type: SAMPLE_FETCH_SUCCESS, data: ["1", "2", "3"] });
    } catch (error) {
      dispatch({ type: SAMPLE_FETCH_ERROR });
    }
  };
}
