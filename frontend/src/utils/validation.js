const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

export const validateLogin = (values) => {
  const error = {};
  if (!values.email) error.email = "Email tidak boleh kosong";
  else if (!emailPattern.test(values.email)) error.email = "Email tidak valid";

  if (!values.password) error.password = "Password tidak boleh kosong";
  else if (!passwordPattern.test(values.password))
    error.password = "Password minimal 8 karakter, huruf besar & angka";

  return error;
};

export const validateSignup = (values) => {
  const error = validateLogin(values);
  if (!values.name) error.name = "Nama tidak boleh kosong";
  return error;
};
