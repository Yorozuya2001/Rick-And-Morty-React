import {
  StyledDiv,
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledDivForm,
  StyledButton,
} from "./style-form";
import useUserValidation from "../../helpers/useUserValidation";
const Form = ({ login }) => {
  const [userData, errors, handleInputChange, handleSubmit] =
    useUserValidation();

  return (
    <StyledDivForm>
      <StyledForm action="">
        <StyledDiv>
          <StyledLabel htmlFor="">Username:</StyledLabel>
          <StyledInput
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <span>{errors.username}</span>
        </StyledDiv>
        <StyledDiv>
          <StyledLabel htmlFor="">Contraseña:</StyledLabel>
          <StyledInput
            type="text"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <span>{errors.password}</span>
        </StyledDiv>
        <StyledDiv>
          <StyledButton onClick={(event) => handleSubmit(event, login)}>
            Login
          </StyledButton>
        </StyledDiv>
      </StyledForm>
    </StyledDivForm>
  );
};

export default Form;
