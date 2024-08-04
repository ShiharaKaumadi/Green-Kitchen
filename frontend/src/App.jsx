import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
    return (
        <main className="overflow-y-hidden text-neutral-600 antialiased">
            <Hero/>
            <Navbar/>
        </main>
    )
}