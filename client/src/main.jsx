import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import videoStore from "./utils/videoStore";
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store = {videoStore}>
     <App />
     </Provider>
    
  </StrictMode>,
)
