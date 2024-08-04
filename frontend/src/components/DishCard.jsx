const DishCard = ({project}) => {
    return (
        <div className="bg-white rounded-2xl">
            <img src={project.image} alt={project.title} className="rounded-2xl p-2"/>
            <div className="p-4">
                <h3 className="mb-2 text-2xl font-bold tracking-tighter">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
            </div>
        </div>
    )
}
export default DishCard;