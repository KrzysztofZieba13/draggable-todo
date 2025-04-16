import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CategoryProvider from './context/categoryContext.tsx';
import TodoProvider from './context/todoContext.tsx';

createRoot(document.getElementById('root')!).render(
  <CategoryProvider>
    <TodoProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </TodoProvider>
  </CategoryProvider>,
);
