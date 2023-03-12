import logo from "./assets/Images/Rasoi.jpg";

const OfflinePage = () => {
  return (
    <div className='flex flex-col items-center'>
         
         <img
            className="w-48 h-48"
            src={logo}
            alt="Rasoi logo"
            title="ApniRasoi"
            />
        <h1 className="font-bold text-lg mt-48">You're offline</h1>
      <p className="font-medium">Please check your internet connection and try again</p>
    </div>
  )
}

export default OfflinePage
