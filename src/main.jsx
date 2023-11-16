import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './features/store.js';
import {Provider} from 'react-redux'
import "remixicon/fonts/remixicon.css";
import 'aos/dist/aos.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'

axios.defaults.baseURL="https://gymsite.pythonanywhere.com"

// axios.defaults.baseURL="http://localhost:8000"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <ToastContainer
    position="top-right"
    autoClose={3000}
    closeOnClick
    pauseOnHover
    theme="dark"
    >
    </ToastContainer>
    <App />
  </Provider>
  </React.StrictMode>,
)
