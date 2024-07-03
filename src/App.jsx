import Navbar from "./components/Home/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Home/Footer";
import { Routes, Route } from "react-router-dom";

const App =() =>
{
    return(
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />                    
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>  
    );
}

export default App;