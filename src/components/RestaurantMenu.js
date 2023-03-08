import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import { IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer"
import { ITEM_IMG_CDN_URL} from "../constants";



const RestaurantMenu = () => {
   const {resId} = useParams();
   const [restaurant,setRestaurant] = useState(null);
   useEffect(() => {
    getRestaurantsInfo();
   },[]);

   async function getRestaurantsInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=25.2520964&lng=86.9841546&menuId="+ resId);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
   }
   return !restaurant ? (
    <Shimmer />
   ) : (
     <div className="">
        <div className="bg-black text-white flex flex-row justify-center items-center">
          <div className="w-56 m-5">
            <img className="rounded-md" src={ IMG_CDN_URL + restaurant?.cloudinaryImageId} />

          </div>
          <div className="space-y-1">
            <h2 className="font-bold uppercase ">{restaurant?.name}</h2>
            <div className="flex space-x-1 text-gray-400">
              <h3>{restaurant?.area}</h3>,
              <h3>{restaurant?.city}</h3>
            </div>
            
            <div className="flex space-x-5 pt-4">
            <h3>{restaurant?.avgRating} ⭐</h3>
            <div className="">|</div>
            <h3>{restaurant?.sla?.slaString}</h3>
            <div className="restaurant-rating-slash">|</div>
            <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            
          </div>
            
            
        </div>
        <div className="items-center justify-center">
          <div className="items-center justify-center">
            <h3 className="menu-title">Recommended</h3>
            <p className="menu-count">
              {Object.keys(restaurant?.menu?.items).length} ITEMS
            </p>
          </div>
           
            {Object.values(restaurant?.menu?.items).map((item) => (
                    <div className="flex flex-col " key={item?.id}>
                    <div className="">
                      <h3 className="item-title">{item?.name}</h3>
                      <p className="item-cost">
                        {item?.price > 0
                          ? new Intl.NumberFormat("en-IN", {
                              style: "currency",
                              currency: "INR",
                            }).format(item?.price / 100)
                          : " "}
                      </p>
                      <p className="item-desc">{item?.description}</p>
                    </div>
                    <div className="menu-img-wrapper">
                      {item?.cloudinaryImageId && (
                        <img
                          className=""
                          src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                          alt={item?.name}
                        />
                      )}
                      <button className="add-btn"> ADD +</button>
                      <br/>
                    </div>
                  </div>
                    
            ))}
            
        </div>
     </div>
  )
};

export default RestaurantMenu;
