import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import food from "../Images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-center bg-gray-100  min-h-screen w-screen ">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
          <Link to={"/about"}>
            <button
              className="bg-green-500 m-2 p-2 rounded-md w-36 uppercase text-white font-lg "
              onClick={() => setShow(false)}
            >
              Hide My Profile
            </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className=" bg-orange-500 m-2 p-2 rounded-md w-36 uppercase text-white font-lg  "
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      
      <div className="flex justify-center items-center md:mt-40 sm:mt-0 w-screen ">
        <div className="container mx-auto  flex flex-col md:flex-row  p-8 justify-between ">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">Welcome to<br/>The world of<br/><span class="text-red-500">Tasty &amp; Fresh Food</span></h1>
            <h4 className="text-gray-600">"Better you will feel if you eat a Apni<span class="text-red-500">Rasoi</span> healthy meal"</h4>
          </div>
          <div className="w-full md:w-1/2">
          <img src="https://tse1.mm.bing.net/th?id=OIP.iy7vdm0PvfWFlbe-dCrJsAHaF7&pid=Api&P=0" alt="Food Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;