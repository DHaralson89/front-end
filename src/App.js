import React from 'react';
import './App.css';
import SignUp from "./components/SignUp"

//Redux Imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { SongReducer } from './redux/reducers';

const store = createStore(SongReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        Spotify Songs
        <SignUp />
      </div>
    </Provider>
  );
}

export default App;
