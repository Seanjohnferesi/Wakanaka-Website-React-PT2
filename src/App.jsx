import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import NailCare from "./pages/NailCare"
import SpaTreatments from "./pages/SpaTreatments"
import Waxing from "./pages/Waxing"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
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
                <Route path= "/gallery" element= {<PageTransition> <Gallery/> </PageTransition>} />
                <Route path= "/nail-care" element= {<PageTransition> <NailCare/> </PageTransition>} />
                <Route path= "/spa-treatments" element= {<PageTransition> <SpaTreatments/> </PageTransition>} />
                <Route path= "/waxing" element= {<PageTransition> <Waxing/> </PageTransition>} />
            </Routes>
        </AnimatePresence>
    )
}

export default App