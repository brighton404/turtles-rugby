import React from 'react'
import App from './App.tsx'
import './index.css'
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { showConsoleMeme } from "./console";
import './utils/lazy.tsx'

const container = document.getElementById("root");
const root = createRoot(container!);
showConsoleMeme();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      registration.unregister();
    }
  });
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);