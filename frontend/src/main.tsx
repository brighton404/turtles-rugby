import React from 'react'
import App from './App.tsx'
import './index.css'
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { showConsoleMeme } from "./console";
/* import TurtleOverlay from './comeBackLater.tsx'; */
import PageInDevelopment from './utils/development.tsx';

const container = document.getElementById("root");
const root = createRoot(container!);
showConsoleMeme();

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
        {import.meta.env.DEV && <PageInDevelopment />}
    </BrowserRouter>
  </React.StrictMode>
);