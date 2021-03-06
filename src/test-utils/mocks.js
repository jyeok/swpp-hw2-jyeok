import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';                                           
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import { history, middlewares } from '../store/store';
import * as actionTypes from '../store/action/actionTypes';

const getMockReducer = jest.fn(
    initialState => (state = initialState, action) => {
      switch (action.type) {
        default:
          break;
      }
      return state;
    }
  );
  
  export const getMockStore = (initialState) => {
    const mockReducer = getMockReducer(initialState);
    const rootReducer = combineReducers({
      blog: mockReducer,
      router: connectRouter(history),
    });
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const mockStore = createStore(rootReducer,
      composeEnhancers(applyMiddleware(...middlewares)));
    return mockStore;
  }  