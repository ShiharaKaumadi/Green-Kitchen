import {TOPMENUS} from "../constants/constant.jsx";

const TopMenus = () => {
    return (
        <section id="expertise">
            <h2 className="my-8 text-white text-center text-3xl tracking-tight lg:text-4xl">Top Menus</h2>
            <div className="container mx-auto px-4">
                {TOPMENUS.map((topMenu, index)=>(
                    <div key={index} className="flex items-center border-b-4 border-neutral-900 py-2">
                        <div className="w-1/3 flex-shrink-0">
                            <img src={topMenu.image} alt={topMenu.title} className="h-auto rounded-3xl"/>
                        </div>
                        <div className="pl-8">
                            <h3 className="text-2xl font-bold tracking-tighter">{topMenu.title}</h3>
                            <p className="mt-4 text-lg tracking-tighter">{topMenu.description}</p>
                        </div>
                    </div>

                ))}
            </div>
        </section>
    )
}
export default TopMenus;