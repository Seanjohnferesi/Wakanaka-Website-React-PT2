import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import PageTransition from "./components/PageTransition"
import {AnimatePresence} from "framer-motion";
import Header from "./components/Header";

function App() {
    const location = useLocation()
    return (
        <AnimatePresence mode= "wait">
            <Header />
            <Routes location={location} key={location.pathname}>
                <Route path="/" element= {<PageTransition> <Home/> </PageTransition>} />
                <Route path="/services" element= {<PageTransition> <Services/> </PageTransition>} />
            </Routes>
        </AnimatePresence>
    )
}

export default App