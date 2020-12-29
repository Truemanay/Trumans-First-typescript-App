/**
 * Define a reducer and the default state for this reducer here 'reducer.ts'
 */
/** *** */
import {
  SAMPLE_FETCH_ERROR,
  SAMPLE_FETCH_LOADING,
  SAMPLE_FETCH_SUCCESS,
} from "./constants";
import { tSampleAction, tSampleState } from "./types";

const defaultState: tSampleState = {
  loading: false,
  data: [],
};

export function SampleReducer(
  state: tSampleState = defaultState,
  action: tSampleAction
): tSampleState {
  switch (action.type) {
    case SAMPLE_FETCH_LOADING:
      return handleSampleFetchLoading(state);
    case SAMPLE_FETCH_SUCCESS:
      return handleSampleFetchSuccess(state, action);
    case SAMPLE_FETCH_ERROR:
      return handleSampleFetchError(state);
    default:
      return state;
  }
}

function handleSampleFetchLoading(state: tSampleState = defaultState) {
  return { ...state, loading: true };
}

function handleSampleFetchSuccess(
  state: tSampleState = defaultState,
  action: tSampleAction
): tSampleState {
  return { ...state, loading: false, data: action.data };
}

function handleSampleFetchError(state: tSampleState = defaultState) {
  return { ...state, loading: false };
}
