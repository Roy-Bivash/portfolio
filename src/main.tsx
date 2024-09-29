import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/router';
import '@/css/index.css';
import '@/css/theme.css';
import '@/css/font.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
