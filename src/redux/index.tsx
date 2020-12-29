import React, { ComponentType } from "react";
import { Platform } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import Thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";
/**
 * Import reducers here!
 * Make sure that when we create new reducers we add them here!
 * like 'SampleReducer' below
 *
 * Also make sure to update the 'tReduxState'
 * type with any new reducers we add in the 'types.ts'
 * file in this folder!
 */
// import { SampleReducer } from "./template/reducer";

/** *** */
const RootReducer = combineReducers({
  /**
   * Add reducers here!
   */
  // SampleReducer,
});

/**
 * Configures the redux store
 * @returns <store, persistedStore> the redux store and redux-persist store
 * (to be used with the redux / redux-persist provider components)
 * see https://github.com/rt2zz/redux-persist for more details on the persisted store
 */
function configureStore() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const persistConfig: PersistConfig<any, any, any, any> = {
    key: "root",
    storage: AsyncStorage,
    blacklist: ["DialReducer"],
    transforms: [],
  };
  const reducer = persistReducer(persistConfig, RootReducer);
  let enhancer = applyMiddleware(Thunk);
  if (Platform.OS !== "web" && __DEV__) {
    const devToolConfig = {
      name: "ketocoach",
    };
    enhancer = composeWithDevTools(devToolConfig)(enhancer);
  }
  const store = createStore(reducer, enhancer);
  const persistedStore = persistStore(store);
  return {
    store,
    persistedStore,
  };
}
const { store, persistedStore } = configureStore();

/**
 * purgePersistedState
 * purges state from disk and returns a Promise
 * (calls the redux-persist persistedStore.purge method)
 */
function purgePersistedState(): Promise<unknown> {
  return persistedStore.purge();
}

/**
 * Redux HOC
 *
 * Provides all child components with the redux store context
 * (i.e. connect and useSelector / useDispatch calls)
 */
function withRedux(WrappedComponent: ComponentType) {
  return function ReduxContainer(): Element {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <WrappedComponent />
        </PersistGate>
      </Provider>
    );
  };
}

export { store, persistedStore, purgePersistedState, withRedux };
