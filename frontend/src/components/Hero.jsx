import heroVideo from "../assets/heroVideo.mp4"
import hero from "../assets/hero.jpg"
const Hero = () => {
    return (
        <section className="relative flex h-screen items-center justify-center">
            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video src={heroVideo} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}></video>
            </div>
        </section>
    )
}
export default Hero;