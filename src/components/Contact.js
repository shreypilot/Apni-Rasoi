import { useState } from "react";
// import contact from "../Images/Contact-Us.png";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setSubmitted(true);
    };
  return (
    <div className="contact-container">
     {!submitted ? (
      <>
        <div className="contact-left">
          <img src="" alt="" />
        </div>
        <div className="flex flex-col items-center">
            <h1 className="text-5xl uppercase my-8 font-bold">Contact us</h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full md:w-3/4 lg:w-2/3">
              <input type="text" placeholder="Name" className="border border-black rounded-md p-2 w-full mb-4" required />
              <input type="email" placeholder="Email" className="border border-black rounded-md p-2 w-full mb-4" required />
              <textarea placeholder="Type your Message here..." className="border border-black rounded-md p-2 w-full mb-4" required></textarea>
              <button type="submit" className="w-36 h-12 text-white border text-xl border-black text-center mb-16 mt-4 bg-blue-600 rounded-md px-4 py-4">Submit</button>
            </form>
        </div>
          </>
      ) : (
        <div className="bg-green-100 flex flex-col items-center justify-center h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-4">Thank you for contacting us!</h1>
            <p className="text-lg">We will reply to your message as soon as possible.</p>
          </div>
        </div>

      )}
    </div>

  );
};

export default Contact;