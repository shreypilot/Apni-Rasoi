import { useEffect, useState } from "react";



const useOnline = () => {

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  
    useEffect(() => {
      
  
      function handleOnlineStatus() {
        setIsOnline(true);
        //localStorage.setItem("isOnline", true);
      }
      function handleOfflineStatus() {
          setIsOnline(false);
          //localStorage.setItem("isOnline", false);
          }
      window.addEventListener("offline", handleOfflineStatus);
      window.addEventListener("online", handleOnlineStatus);
  
      return () => {
        window.removeEventListener("offline", handleOfflineStatus);
        window.removeEventListener("online", handleOnlineStatus);
      };
    }, []);




return isOnline;//return true or false


}
export default useOnline;