import { Helmet } from "react-helmet-async";
import Cover from "../shared/cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss/Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <SectionTitle
        heading="Today's Offer"
        subHeading="---Dont't miss---"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        items={dessert}
        title={"Desserts"}
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"Salad"}
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
