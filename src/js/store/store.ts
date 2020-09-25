import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

export const store = createStore(
    // @ts-ignore
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 25})
        : (f: () => void) => f,
    ),
  );
