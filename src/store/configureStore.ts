import { createStore, combineReducers,applyMiddleware,compose } from 'redux';
import reducers from '../Reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  return createStore(
    combineReducers({
      ...reducers
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
}
