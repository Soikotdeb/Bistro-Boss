import Cover from "../../shared/cover/Cover";
import MenuItems from "../../shared/menuItem/MenuItems";

const MenuCategory = ({items , title, coverImg}) => {
    return (
        <div className="pt-8">
           { title&& <Cover img={coverImg} title={title} ></Cover>}

             <div className="grid md:grid-cols-2 gap-10 my-16">

                {
                    items.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        <button className="btn mx-auto flex text-orange-600 btn-outline border-0 mb-6 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
        </div>
    );
};

export default MenuCategory;