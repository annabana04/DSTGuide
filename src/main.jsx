/* main.jsx */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Spring from "./Spring.jsx";
import Winter from "./Winter.jsx";
import Summer from "./Summer.jsx";
import Autumn from "./Autumn.jsx";
import Nutrients from "./Nutrients.jsx";
import Equipment from "./Equipment.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
        <BrowserRouter>
                <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/spring" element={<Spring />} />
                        <Route path="/summer" element={<Summer />} />
                        <Route path="/autumn" element={<Autumn />} />
                        <Route path="/winter" element={<Winter />} />
                        <Route path="/nutrients" element={<Nutrients />} />
                        <Route path="/equipment" element={<Equipment />} />
                </Routes>
        </BrowserRouter>
);