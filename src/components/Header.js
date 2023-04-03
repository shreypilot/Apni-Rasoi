import { useState } from "react";
import Rasoi from "./assets/Images/Rasoi.jpg";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";



// Title component for display logo
const Title = () => (
  <Link to="/">
    <img
      className="md:w-full md:h-20"
      src={Rasoi}
      alt="Rasoi logo"
      title="Apni Rasoi"
    />
  </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  const isOnline = useOnline();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="md:shadow-lg md:h-20 ">
      <div className="md:flex">
        <div className="flex justify-between md:w-full">
          <Title />
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.293 5.293a1 1 0 0 0-1.414-1.414L12 10.586 5.121 3.707A1 1 0 1 0 3.707 5.121L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879z"
                />
              ) : (
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:justify-evenly w-full mt-4 md:mt-0 text-gray-700 capitalize text-xl font-bold`}
        >
          <li className="hover:bg-orange-500 hover:text-white w-16 h-8 p-2 rounded-md">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white w-16 h-8 p-2 rounded-md">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white w-20 h-8 p-2 rounded-md">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:bg-orange-500 hover:text-white w-12 h-8 p-1 rounded-md">
            <Link to="/cart">
              <ShoppingCartIcon />
              {cartItems.length}
            </Link>
          </li>
          <h1 className="cursor-pointer p-2">
            {isOnline ? "✅" : "🔴"}
          </h1>
          <li>
            {isLoggedin ? (
              <button
                className="hover:bg-green-500 hover:text-white bg-green-500 w-16 h-8 m-1 p-2 rounded-md"
                onClick={() => navigate("/login")}
              >Login</button>
            ) : (
              <button
                className="hover:bg-red-500 hover:text-white bg-green-500 w-16 h-8 m-1 p-2 rounded-md"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) }
          </li>
        </ul>
      </div>
    </div>


  );
};

export default Header;
