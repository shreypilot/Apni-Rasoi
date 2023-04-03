/* eslint-disable jsx-a11y/alt-text */
import { ITEM_IMG_CDN_URL } from "../constants";
import  {removeItem} from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const FoodItem = ({ name, description, imageId, price }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem());
  };

  

  return (
    <div className=" md:w-1/2 lg:w-56 p-2 md:p-4 lg:p-6 ">
  <div className="shadow-lg bg-pink-200">
    <img
      className=" w-32 md:w-36 mx-auto my-4 pt-4"
      src={ITEM_IMG_CDN_URL + imageId}
      alt={name}
    />
    <h2 className="font-bold text-xl mx-8 my-2">{name}</h2>
    <h3 className="mx-8 my-2">{description}</h3>
    <h4 className="mx-8 my-2">Rupees: {price / 100}</h4>
    <button
      className="bg-green-400 p-3 mx-8 my-2 text-bold uppercase"
      onClick={() => handleRemoveItem()}
    >
      Remove
    </button>
    
  </div>
</div>

  );
};

export default FoodItem;
