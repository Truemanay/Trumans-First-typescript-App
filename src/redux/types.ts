/**
 * As we add new reducers don't forget to add their states here!
 */
// import { tSampleState } from "./template/types";

/**
 * ReduxState
 * The main type definition for the Redux Store
 */
export interface tReduxState {
  // SampleReducer: tSampleState,
  _persist: { version: number; rehydrated: boolean };
}

/**
 * Instead of importing our redux state interface
 * in every component that it is used, here we are using
 * module augmentation to extend the default state.
 *
 * See more about module augmentation here:
 *  https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 *
 * Essentially what this is doing is modifying the 'DefaultRootState' export
 * from the react-redux module. Thus, whenever the ts compiler sees 'DefaultRootState'
 * inside of react-redux it uses the type interface below instead of what is
 * exported from the module.
 * (i.e. useSelector calls are typed automatically! no need to import the state type in every file it's used!)
 */
/** *** */

declare module "react-redux" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends tReduxState {}
}
