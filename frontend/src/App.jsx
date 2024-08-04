import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import DishCard from "./components/DishCard.jsx";
import Dishes from "./components/Dishes.jsx";
import About from "./components/About.jsx";
import Mission from "./components/Mission.jsx";
import Expertise from "./components/TopMenus.jsx";

export default function App() {
    return (
        <main className="overflow-y-hidden text-neutral-600 antialiased">
            <Hero/>
            <Navbar/>
            <Dishes/>
            <About/>
            <Mission/>
            <Expertise/>
        </main>
    )
}