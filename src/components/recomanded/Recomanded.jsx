import SectionTitle from "../sectionTitle/SectionTitle";
import recomanded1 from "../../assets/home/slide1.jpg";
import recomanded4 from "../../assets/home/slide4.jpg";
import recomanded3 from "../../assets/home/slide3.jpg";

const Recomanded = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"---Should Try---"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-14">
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
          <figure>
            <img
            className="w-full h-96"
              src={recomanded1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">Caeser Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
          <figure>
            <img
            className="w-full h-96"
              src={recomanded3}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">Soups</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-5">
          <figure>
            <img
            className="w-full h-96"
              src={recomanded4}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title flex justify-center">Desserts</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-center">
            <button className="btn btn-primary">ADD TO CART</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recomanded;
