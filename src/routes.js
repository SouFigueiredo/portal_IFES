import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Destaques from "./pages/Destaques/Destaques";
import Noticias from "./pages/Noticias/Noticias";
import Terceirao from "./pages/Terceirao/Terceirao";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = { <Home/> } />
                <Route path="/destaques" element = { <Destaques/> } />
                <Route path="/noticias" element = { <Noticias/> } />
                <Route path="/terceirao" element = { <Terceirao/> } />
            </Routes>
        </BrowserRouter>
    )
}