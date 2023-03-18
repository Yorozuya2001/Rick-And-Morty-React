import { useState } from "react";
import { validation } from "./Validation";

const useUserValidation = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (evento) => {
    const value = evento.target.value;
    const name = evento.target.name;

    setUserData({ ...userData, [name]: value });
    setErrors({
      ...errors,
      [name]: validation({ [name]: value })[name],
    });
  };

  const handleSubmit = (event, login) => {
    event.preventDefault();
    login(userData);
  };

  return [userData, errors, handleInputChange, handleSubmit];
};

export default useUserValidation;
