import { useState } from "react";
import { validation } from "./Validation";
import { StyledForm } from "./style-form";
import { StyledDiv } from "./style-form";
const Form = ({ login }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <StyledForm action="">
      <StyledDiv>
        <label htmlFor="">Username:</label>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <span>{errors.username}</span>
      </StyledDiv>
      <StyledDiv>
        <label htmlFor="">Contraseña:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <span>{errors.password}</span>
      </StyledDiv>
      <StyledDiv>
        <button onClick={handleSubmit}>Login</button>
      </StyledDiv>
    </StyledForm>
  );
};

export default Form;
