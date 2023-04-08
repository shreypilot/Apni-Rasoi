import React from 'react';
import {RxCross2} from 'react-icons/rx';
import { useDispatch } from "react-redux";
import { closeSignIn } from '../utils/appSlice';
import bg from '../components/assets/Images/bg.png';
import {useState} from 'react';
function Login() {
  const dispatch = useDispatch();
  const closeSignInHandler = () => {
    console.log("toggleSignInHandler called");

    dispatch(closeSignIn())
  }
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleSignUp = () => {
    setIsLoginForm(!isLoginForm);
  };
  const [showReferralCode, setShowReferralCode] = useState(false);

  const handleReferralCodeToggle = () => {
    setShowReferralCode(!showReferralCode);
  };
  
  return (
    
    <div className="h-screen flex">
    <div className="h-full w-1/2">
      <img className="" src={bg} alt="My Homepage"/>
    </div>

    <div class="max-w-md w-full h-full bg-white px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
    <div>
              <RxCross2 
                className="h-8 w-8 text-gray-400 cursor-pointer"
                onClick={() => closeSignInHandler()}
                
              />
      </div>
      <h2 className="text-3xl font-extrabold text-gray-900">
        {isLoginForm ? 'Login' : 'Create an account'}
      </h2>
      <form className="mt-8 space-y-6 w-full" action="#" method="POST">
        <div className="rounded-md shadow-sm -space-y-px">
          {isLoginForm ? null : (
            <>
             <div>
              <label for="full-name" className="sr-only">
                 Name
              </label>
              <input
                id="Name"
                name="Name"
                type="text"
                autocomplete="Name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
            </div>

            <div>
            <label for="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
            
          </div> 
            </>
            
          )}
          <div>
            <label for="phone-number" class="sr-only">
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phone-number"
              type="tel"
              autocomplete="tel"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Phone Number"
            />
          </div>
          <div className="rounded-md shadow-sm -space-y-px">
          {isLoginForm ? null : (
            <>
              <div className="relative">
                <div className="flex items-center">
                  <input
                    id="have-referral-code"
                    name="have-referral-code"
                    type="checkbox"
                    checked={showReferralCode}
                    onChange={handleReferralCodeToggle}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="have-referral-code" className="ml-2 block text-sm text-gray-900">
                    Have a referral code?
                  </label>
                </div>
                {showReferralCode && (
                  <div className="mt-2">
                    <input
                      id="referral-code"
                      name="referral-code"
                      type="text"
                      autoComplete="off"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Referral-code"
                    />
                  </div>
                )}
            </div>
            </>
            
          
          )
          }

          
        
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" className="ml-2 block text-sm text-gray-900">
              I accept the <a href="#" class="text-blue-600">Terms & Conditions</a> and <a href="#" class="text-blue-600">Privacy Policy</a>.
            </label>
          </div>
        </div>
        <div>
          <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {isLoginForm ? 'Login' : 'Create Account'}
          </button>
        </div>
        </div>
      </form>
      <div className="mt-6">
        <button
          className="text-blue-600 hover:text-blue-700 font-medium"
          onClick={() => setIsLoginForm(!isLoginForm)}
        >
          {isLoginForm ? 'Create an account' : 'Login'}
        </button>
      </div>
    </div>
  </div>
  
      );
    };
    export default Login;
