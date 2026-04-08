import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@/ui/App'
import ReactGa from 'react-ga4';

const TRACKING_ID = "G-CPZKCHQ8X3";

ReactGa.initialize(TRACKING_ID);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
