import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './popup.jsx';
import './readingTimer.css';

const root = document.createElement('div');
root.id = 'reading-timer';

createRoot(document.body.appendChild(root)).render(<Popup />);
