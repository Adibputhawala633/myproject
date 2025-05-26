import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";


import HeaderCompo from "./components/header";
import HomeCompo from "./page/home.jsx";
import AboutCompo from "./page/about.jsx";
import ContactCompo from "./page/ContactPage.jsx";
import ExampleCompo from "./page/ExampleCompo.jsx";
import StateCompo from "./page/StateCompo.jsx";
import PropsCompo from "./page/PropsCompo.jsx";
import EventCompo from "./page/EventCompo.jsx";
import UseeffectCompo from "./page/UseeffectCompo.jsx";


createRoot(document.getElementById('root')).render(
  <>
        <BrowserRouter>
            <Routes>
                <Route path="/"element={<><HeaderCompo/><HomeCompo/></>}/>
                <Route path="/about"element={<><HeaderCompo/><AboutCompo/></>}/>
                <Route path="/contact"element={<><HeaderCompo/><ContactCompo/></>}/>
                <Route path="/examples"element={<><HeaderCompo/><ExampleCompo/></>}/>
                <Route path="examples/state"element={<><StateCompo/></>}/>
                <Route path="examples/props"element={<><PropsCompo/></>}/>
                <Route path="examples/events"element={<><EventCompo/></>}/>
                <Route path="examples/useeffect"element={<><UseeffectCompo/></>} />
            </Routes>
            </BrowserRouter>
    </>
);


  