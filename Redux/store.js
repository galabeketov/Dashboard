import rootReducer from "./reducers";
import { createStore } from "redux";
import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const dispatch = store.dispatch;

export { store, dispatch };
