import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import { IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer"
import { ITEM_IMG_CDN_URL} from "../constants";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
import useRestaurant from "../utils/useRestaurant";



const RestaurantMenu = () => {
   const {resId} = useParams();
   const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

   return !restaurant ? (
    <Shimmer />
   ) : (
        <div className="">
        <div className="bg-black text-white flex flex-row justify-center items-center">
         <div className="w-56 m-5">
           <img className="rounded-md" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />

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
           <div className="items-center justify-center flex">
             <h3 className="mr-2 justify-between">Recommended:</h3>
             <p className="menu-count">
               {Object.keys(restaurant?.menu?.items).length} ITEMS
             </p>
           </div>

           {Object.values(restaurant?.menu?.items).map((item) => (
            <div>
             <div className="flex  justify-between mb-2 mt-2" key={item?.id}>
               <div className="ml-2 mt-2">
                 <h3 className="font-bold uppercase">{item?.name}</h3>
                 <p className=" font-extralight">
                   {item?.price > 0
                     ? new Intl.NumberFormat("en-IN", {
                       style: "currency",
                       currency: "INR",
                     }).format(item?.price / 100)
                     : " "}
                 </p>
                 <p className=" font-medium">{item?.description}</p>
               </div>
               <div className="">
                 {item?.cloudinaryImageId && (
                   <img
                     className="rounded-md border border-gray-600 w-24 h-24"
                     src={ITEM_IMG_CDN_URL + item?.cloudinaryImageId}
                     alt={item?.name} />
                 )}
                 <button
                   className="p-1 font-bold bg-green-500 hover:bg-orange-500 rounded-md my-1 w-24 h-10 mx-1 "
                   onClick={() => addFoodItem(item)}> ADD +</button>
               </div>
             </div>
              <hr className=" text-black w-full mt-1 mb-1  "/>

            </div>

           ))}

         </div>
         </div>
    
  )
};

export default RestaurantMenu;
