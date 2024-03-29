// Imports: Dependencies
import { AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

// Imports: Redux
import rootReducer from "../_reducers/index";
import { createLogger } from "redux-logger";

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== "production") {
    // middleware.push(createLogger());
}

// Middleware: Redux Persist Config
const persistConfig = {
    // Root?
    key: "root",
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ["authentication"],
    // Blacklist (Don't Save Specific Reducers)
    blacklist: [
        "users"
        //     "counterReducer",
    ]
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export { store, persistor };
