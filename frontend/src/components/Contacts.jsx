import {CONTACT} from "../constants/constant.jsx"
const Contacts = () => {
    return (
        <section className="container mx-auto py-16" id="contact">
            <h2 className="text-white mb-8 text-center text-3xl lg:text-4xl">Contacts</h2>
            <div className="text-neutral-700">
                {CONTACT.map((details)=>(
                    <p key={details.key} className="my-20 border-b border-neutral-400 pb-2 text-center items-center justify-center test-center text-xl tracking-tighter lg:text-2xl">{details.value}</p>
                ))}
            </div>
        </section>
    )
}
export default Contacts;