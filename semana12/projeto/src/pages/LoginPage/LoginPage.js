import React from "react";
import {
  ButtonsContainer,
  MainContainer,
  StyledForm,
  UserImage,
  StyledTextField,
} from "./style";
import { Typography, Button} from "@material-ui/core";
import useForm from "../../hooks/useForm";
import user_img from "../../assets/img/user.png";
import { useHistory } from "react-router-dom";
import { goToSignup } from "../../routes/coordinator";
import { login } from "../../services/requests";

const LoginPage = (props) => {
  const history = useHistory();
  const [form, handleInputChange] = useForm({ email: "", password: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, history,props.setAuth);
  };

  return (
    <MainContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <Typography variant="h4">Login</Typography>
        <UserImage alt="user" src={user_img} />
        <StyledTextField
          variant="outlined"
          color="secondary"
          required
          name="email"
          label="Email"
          value={form.email}
          onChange={handleInputChange}
          type="email"
        />
        <StyledTextField
          variant="outlined"
          color="secondary"
          required
          name="password"
          label="Senha"
          type="password"
          value={form.password}
          onChange={handleInputChange}
        />
        <ButtonsContainer>
          <Button
            onClick={() => {
              goToSignup(history);
            }}
            variant="text"
            color="primary"
          >
            Se cadastre
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </MainContainer>
  );
};

export default LoginPage;
