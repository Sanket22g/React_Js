import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const Areactelement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Google link'
)

createRoot(document.getElementById('root')).render(
  // Areactelement

  <App />

)
