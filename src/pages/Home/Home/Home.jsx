import { Helmet } from "react-helmet-async";
import Recomanded from "../../../components/recomanded/Recomanded";
import Featured from "../../featured/Featured";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Testimonials from "../Testimonials/Testimonials";
import Service from "../service/Service";
import Category from "./Category/Category";
import PopularMenu from "./popularManu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss/Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Service></Service>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recomanded></Recomanded>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;