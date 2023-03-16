import logo from "./assets/Images/Rasoi copy.jpg";

const OfflinePage = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className='flex flex-col items-center'>
         
         <img
            className="w-62 h-56 pt-24"
            src={logo}
            alt="Rasoi logo"
            title="ApniRasoi"
            />
        <h1 className="font-bold text-xl mt-60 ">You're offline</h1>
      <p className="font-medium text-lg ">Please check your internet connection and try again 🌐

</p>
      <button onClick={handleReload} className="box-border w-16 h-6 pt-1 mb-80 rounded-sm font-light text-md bg-gray-200">Reload</button>
    </div>
  )
}

export default OfflinePage
