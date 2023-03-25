import { useState } from "react";
import { useNavigate } from "react-router-dom";

function useAuthentication() {
  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "1password";

  const navigate = useNavigate();
  

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
  };

  return [access, login, logout];
}

export default useAuthentication;
