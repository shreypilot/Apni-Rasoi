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
    <div className="w-56 p-2 m-4 shadow-lg bg-pink-200">
      <img
          className="rounded-md md:w-28 item-center m-4"
          src={ITEM_IMG_CDN_URL + imageId}
          alt={name}
        />
      <h2 className="font-bold text-xl m-4">{name}</h2>
      <h3 className="m-4">{description}</h3>
      <h4 className="m-4">Rupees: {price / 100}</h4>
      <button
        className="bg-green-400 p-3 ml-4 text-bold uppercase"
        onClick={() => handleRemoveItem()}
      >
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
