import { IMG_CDN_URL } from "../constants";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="p-1 h-full w-72 border border-x-2 border-y-2  border-gray-400 overflow-visible rounded-lg space-x-4 shadow-md shadow-gray-200 ">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold">{name}</h3>
      <h5 className="font-light">{cuisines.join(", ")}</h5>
      <h5 className="font-semibold">{area}</h5>
      <span className="flex space-x-2 font-bold ">
      <h4 className={`rounded-md px-2 py-1 text-sm font-medium ${avgRating < 4 ? 'bg-red-400 text-white' : avgRating === '--' ? 'bg-white text-black' : 'text-white bg-green-500'}`}>
  <i className="fa-solid fa-star mr-1"></i>
  {avgRating}
</h4>

        <h4>•</h4>
        <h4>{lastMileTravelString}</h4>
        <h4>•</h4>
        <h4>{costForTwoString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;