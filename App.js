import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import PlacesNavigator from './navigation/PlacesNavigator';
import  placeReducer from './store/places-reducer';
const rootReducer = combineReducers({
  places: placeReducer
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));



export default function App() {
  return (
    <Provider store={store}>
    <PlacesNavigator/>
    </Provider>
    
  );
}
