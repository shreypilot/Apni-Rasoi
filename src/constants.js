
// Image CDN URL for Restaurant card
export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// Swiggy url to get Restaurant data
export const swiggy_api_URL =
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.242453&lng=86.9842256&page_type=DESKTOP_WEB_LISTING";

//menu url of each restaurant
export const FETCH_MENU_URL ="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5961124&lng=85.16511059999999&restaurantId=";


export const ITEM_IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
  
export const shimmer_card_unit = 24;

// Github - username
export const Github_UserName = "shreypilot";
export const Github_Repository_Name = "ApniRasoi";

// Github API for User
export const Github_API_User = "https://api.github.com/users/";

// Social Media Links
export const Linkedin_Link = "https://www.linkedin.com/in/shreya-kumari-2ba673202/";
export const Twitter_Link = "https://twitter.com/Shreypilot";
export const Github_Link = "https://github.com/shreypilot";
export const Email_Link = "mailto:shreypilot28@gmail.com";

// Github Authorization Token
export const options = {
  method: "GET",
  headers: {
    Authorization: "",
  },
};
// menu items api card type key
export const MENU_ITEM_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
export const RESTAURANT_TYPE_KEY = "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";