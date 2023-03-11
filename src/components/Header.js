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
      className="w-full h-full"
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

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between h-20 bg-white shadow-lg">
      <Title />
      <div className="py-8">
        <ul className="flex justify-evenly space-x-4 font-bold text-gray-700 ">
          <Link to="/">
             <li className="">Home</li>
          </Link>
          <Link to="/About">
             <li>About</li>
          </Link>
          <Link to="/Contact">
             <li>Contact</li>
          </Link>
          <Link to="/cart">
             <li>
            <ShoppingCartIcon />{cartItems.length}
            </li>
          </Link>
          
          <h1 className="cursor-pointer" >{isOnline ? "✅" : "🔴"}</h1>

          <li className=" ">
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
