import { StyledForm } from "./style-form";
import { StyledDiv } from "./style-form";
import useUserValidation from "../../helpers/useUserValidation";
const Form = ({ login }) => {
  const [userData, errors, handleInputChange, handleSubmit] =
    useUserValidation();

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
        <button onClick={(event) => handleSubmit(event, login)}>Login</button>
      </StyledDiv>
    </StyledForm>
  );
};

export default Form;
