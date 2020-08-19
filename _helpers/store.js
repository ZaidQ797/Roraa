import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../_reducers";

import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import homeReducer from "../_reducers/homeReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

// Exports
export { store, persistor };
