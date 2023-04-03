import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import { IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer"
import { ITEM_IMG_CDN_URL,FETCH_MENU_URL,MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,} from "../constants";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
// import useRestaurant from "../utils/useRestaurant";

  
const RestaurantMenu = () => {
  const [restaurant , setRestaurant] = useState(null);
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [menuItems, setMenuItems] = useState([]);

  const dispatch = useDispatch();

    const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(FETCH_MENU_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }
    
  return !restaurant ? (
    <Shimmer />
  ) : (
    
    <div className="restaurant-menu">
      <div className="bg-black text-white flex flex-row justify-center items-center">
        <div className="w-56 m-5">
          <img
          className="rounded-md"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        </div>
        
        <div className="space-y-1">
          <h2 className="font-bold uppercase">{restaurant?.name}</h2>
          <p className="restaurant-tags">{restaurant?.cuisines?.join(", ")}</p>
          <div className="flex space-x-5 pt-4">
            <div>{restaurant?.avgRating} ⭐</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
          </div>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="items-center justify-center">
          <div className="items-center justify-center flex">
            <h3 className="mr-2 justify-between">Recommended</h3>
            <p className="menu-count">
              {menuItems.length} ITEMS
            </p>
          </div>
        
          <div className="menu-items-list">
            {menuItems.map((item) => (
              <div>
              <div className="flex justify-between mb-2 mt-2" key={item?.id}>
                <div className="ml-2 mt-2">
                  <h3 className="font-bold uppercase">{item?.name}</h3>
                  <p className="font-extralight">
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="font-medium">{item?.description}</p>
                </div>
                <div className="">
                  {item?.imageId && (
                    <img
                      className="rounded-md border border-gray-600 w-24 h-24"
                      src={ITEM_IMG_CDN_URL + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="p-1 font-bold bg-green-500 hover:bg-orange-500 rounded-md my-1 w-24 h-10 mx-1 "  onClick={() => addFoodItem(item)}> ADD +</button>
                </div>
              </div>
              <hr className=" text-black w-full mt-1 mb-1  "/>
              </div>
              
            ))}
          </div>
        
      </div>
    </div>
    </div>
    
  );
};
export default RestaurantMenu;
