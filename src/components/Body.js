import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react"; /* This is named export */
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";
import "./Body.css";
import { Link ,useNavigate } from "react-router-dom";
import { RxCross2 } from 'react-icons/rx';
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import OfflinePage from './OfflinePage';

// Body Component for body section: It contain all restaurant cards
const Body = () => {
  // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const isOnline = useOnline();
  const navigate = useNavigate();


  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  const handleClear = () => {
    setSearchText("");
    setFilteredRestaurants(allRestaurants);
  };
  
  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <>
      
        
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            // update the state variable searchText when we typing in input box
            onChange={(e) =>{
              setSearchText(e.target.value)
              searchData(e.target.value, allRestaurants);
            } 
          }
          ></input>
          {searchText && (
            <button className="clear-btn"  onClick={handleClear}>
              < RxCross2 />
            </button>
          )}
          <button
            className="search-btn"
            onClick={() => {
              // user click on button searchData function is called
              searchData(searchText, allRestaurants);
            }}
          >
            Search
          </button>
          
        </div>
        {errorMessage && <div className="error-container">{errorMessage}</div>}

        {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex flex-wrap p-4 m-4 justify-between space-y-4">
            {/* We are mapping restaurants array and passing JSON array data to RestaurantCard component as props with unique key as restaurant.data.id */}
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link to={"/restaurant/" + restaurant.data.id}>
                    <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                </Link>
                
              );
            })}
          </div>
        )}
        
    </>
      
    );
    
  };

export default Body;