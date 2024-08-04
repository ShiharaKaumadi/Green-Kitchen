import {DISHES} from "../constants/constant.jsx"
import DishCard from "./DishCard.jsx";

const Dishes = () => {
    return(
        <section className="container mx-auto py-16" id="dishes">
            <h2 className="mb-8 text-center text-3xl text-white tracking-tighter lg:text-4xl">Our Dishes</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                {DISHES.map((project, index)=>(
                    <DishCard key={index} project={project}/>
                ))}
            </div>
        </section>
    )
}
export default Dishes;