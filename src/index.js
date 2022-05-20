import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';




const initialState = {
  count: 0,
}
const reducer = (state = initialState, action)=> {
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state, 
        count: state.count + 1
      }
    case 'DECREMENT':
      return  {
        ...state, 
        count: state.count - 1
      }
    default:
      return state;
  }
}
const store = createStore(reducer, composeWithDevTools());



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
       <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
