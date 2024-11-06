import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './popup.jsx';
import './infiniteScrolling.css';

const root = document.createElement('div');
root.id = 'infinite-scrolling';

createRoot(document.body.appendChild(root)).render(<Popup />);
