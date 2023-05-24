const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-800 text-white absolute right-0 mr-4 mt-4 px-4 rounded">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}!</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
        <button className="btn mx-auto flex text-orange-600 bg-slate-100 btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
