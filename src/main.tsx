import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Router from '@/router';
import '@/css/theme.css';
import '@/css/font.css';
import '@/css/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
