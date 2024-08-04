import heroVideo from "../assets/heroVideo.mp4";

const Mission = () => {
    return (<section id="mission" className="cotainer mx-auto text-center">
            <h2 className="mb-8 text-white text-center text-3xl tracking-tighter lg:text-4xl">Mission</h2>

        <div className="flex flex-wrap">
            <div className="w-full p-4 lg:w-1/2">
                <p className="m-8 text-center text-3xl leading-relaxed tracking-tight ">
                    "Our mission is to serve authentic Sri Lankan cuisine with a modern twist, offering fresh,
                    high-quality
                    dishes in a welcoming atmosphere that brings people together."
                </p>
            </div>
            <div className="w-full p-4 lg:w-1/2">
                <video autoPlay loop muted
                       className="rounded-lg shadow-orange-400 mx-2 my-4">
                    <source src={heroVideo} type="video/mp4"/>
                    Your Browser does not support the video tag.
                </video>
            </div>

        </div>
    </section>)
}
export default Mission;