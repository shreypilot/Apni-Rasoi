// Footer component for footer section
import {AiFillHeart} from 'react-icons/ai';
import {AiFillCopyrightCircle} from 'react-icons/ai';

const Footer = () => {
    return (
      <div className=" bg-black text-white flex justify-center space-x-2 ">
        Created By
        <AiFillHeart className='text-red-400 ml-2'/>
        <a href="https://www.linkedin.com/in/shreya-kumari-2ba673202/" target="_blank" title="shreyakumari" rel="noreferrer" className='text-blue-800 font-bold capitalize'>
          shreya kumari
        </a>
        <AiFillCopyrightCircle className='text-yellow-400'/> 2023
        <strong>
          Apni <span>Rasoi</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;