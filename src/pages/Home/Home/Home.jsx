import Recomanded from "../../../components/recomanded/Recomanded";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Service from "../service/Service";
import Category from "./Category/Category";
import PopularMenu from "./popularManu/PopularMenu";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <Service></Service>
           <PopularMenu></PopularMenu>
           <Contact></Contact>
           <Recomanded></Recomanded>
        </div>
    );
};

export default Home;