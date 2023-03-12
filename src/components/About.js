import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
//import food from "../Images/burger-image.png";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="">
        {/* used ternary condition to Show my profile and Hide my Profile and using nested routing */}
        {show ? (
          <>
          <Link to={"/about"}>
            <button
              className="bg-green-500 m-2 p-2 rounded-md w-36 uppercase text-white font-lg ml-32"
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
              className=" bg-orange-500 m-2 p-2 rounded-md w-36 uppercase text-white font-lg "
              onClick={() => setShow(true)}
            >
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <div className="flex flex-col items-center">
        <div className=" text-5xl pt-24 flex flex-col items-center">
          <h1 className="text-gray-600 text-7xl font-bold box-border h-48 m-2 ">
            Welcome to <br /> The world of <br />{" "}
            <span className="text-white bg-orange-500 py-2 px-2 rounded-lg ">Tasty & Fresh Food</span>
          </h1>
          <h4 className="mt-16">
            "Better you will feel if you eat a Apni <span className="text-orange-500">Rasoi</span> healthy
            meal"
          </h4>
        </div>
        <div className="rounded-xl ml-48  mb-2 ">
          <img src="https://tse1.mm.bing.net/th?id=OIP.iy7vdm0PvfWFlbe-dCrJsAHaF7&pid=Api&P=0" alt="Food Image" />
        </div>
      </div>
    </div>
  );
};

export default About;