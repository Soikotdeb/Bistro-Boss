import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/sectionTitle/SectionTitle";
import MenuItems from "../../../shared/menuItem/MenuItems";



const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Menu"
                subHeading="---Check it out---" 
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <button className="btn mx-auto flex text-orange-600 btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
        </section>
    );
};
export default PopularMenu;