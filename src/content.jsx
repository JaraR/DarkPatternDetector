import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Popup } from './views/popup.jsx'
import './content.css'

const root = document.createElement('div')
root.id = 'crx-root'

createRoot(document.body.appendChild(root)).render(
    <StrictMode>
        <Popup />
    </StrictMode>
)
