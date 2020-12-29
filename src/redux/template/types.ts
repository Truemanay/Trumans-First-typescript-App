/**
 * Define any reusable types / interfaces here 'types.ts'
 */
/** *** */

export type tSampleState = {
  loading: boolean;
  data?: string[];
};

export type tSampleAction = {
  type: string;
  data?: string[];
};

export type tSampleDispatch = (action: tSampleAction) => void;
