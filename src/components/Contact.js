import { useState } from "react";
// import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img src="" alt="" />
      </div>
      <div className="flex flex-col items-center ">
      <h1 className=" text-5xl uppercase my-8 font-bold  ">Contact us</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
                <input type="text" placeholder="Name" className=" box-border border border-black rounded-md p-2 w-96 mb-4 " required/>
                    <input type="email" placeholder="Email" className=" box-border border border-black rounded-md p-2 w-96 mb-4"  required/>
                    <textarea placeholder="Type your Message here..." className=" box-border border border-black rounded-md p-2 w-96 mb-4 "  required></textarea>
                    <button type="submit" className="w-36 h-12 text-white border text-xl  border-black  text-center box-border mb-16 mt-4 bg-blue-600  rounded-md px-4 py-4">Submit</button>
                    {message && <span>Thanks for contacting ApniRasoi, We will reply ASAP.</span>}
                </form>
      </div>
    </div>
  );
};

export default Contact;