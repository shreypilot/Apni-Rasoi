import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-3xl mt-4 p-4"> Cart Items - {cartItems.length}</h1>
      <button
        className="bg-red-600 p-2 m-5 font-bold mt-2 uppercase"
        onClick={() => handleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex  flex-wrap p-4 m-4 justify-between space-y-4 scroll-my-28">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
