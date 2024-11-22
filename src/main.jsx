import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css';
import App from './assets/styles/App.css'
import store from './redux/store.js';
import { Provider } from 'react-redux';
createRoot(document.getElementById('root')).render(
<Provider store = {store} >
    <StrictMode>
      <App />
    </StrictMode>
</Provider>
)