import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("username");
    if (userData) {
      setIsAuthenticated(true);
    }
  }, [setIsAuthenticated]);
  return isAuthenticated;
};
export default useAuth;
