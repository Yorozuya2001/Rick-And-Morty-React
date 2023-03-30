export const validation = (inputs) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passwordRegex = /^(?=.*[0-9]).{6,10}$/;
  const errors = {};

  !emailRegex.test(inputs.username)
    ? (errors.username = "Este campo requiere un correo electrónico válido *")
    : (errors.username = "");

  !inputs.username &&
    (errors.username = "Este campo requiere un correo electrónico válido *");

  !passwordRegex.test(inputs.password)
    ? (errors.password =
        "Tú contraseña Debe contener almenos un número y una longitud de 6 a 10 caracteres *")
    : (errors.password = "");

  return errors;
};
