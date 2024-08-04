import first from "../assets/first.mp4"
import hero from "../assets/hero.jpg"
const Hero = () => {
    return (
        <section className="relative flex h-screen items-center justify-center">
            <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
                <video src={first} className="h-full w-full object-cover" muted autoPlay loop playsInline poster={hero}></video>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black">
                <div className="relative z-20 flex h-screen flex-col justify-end pb-20">
                    <h1 className="text-9xl font-bold text-white p-8">Green Kitchen</h1>
                    <p className="text-4xl tracking-tighter text-white pl-14">Maharagama</p>
                </div>
            </div>
        </section>
    )
}
export default Hero;