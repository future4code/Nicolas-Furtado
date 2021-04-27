import React from "react";
import {
  ButtonsContainer,
  MainContainer,
  StyledForm,
  UserImage,
  StyledTextField,
} from "./style";
import { Typography, Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import user_img from "../../assets/img/user.png";
import { useHistory } from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";
import { signup } from "../../services/requests";

const SignupPage = (props) => {
  const history = useHistory();
  const [form, handleInputChange] = useForm({
    email: "",
    password: "",
    username: "",
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    signup(form, history,props.setAuth);
  };

  return (
    <MainContainer>
      <StyledForm onSubmit={onSubmitForm}>
        <Typography variant="h4">Cadastro</Typography>
        <UserImage alt="user" src={user_img} />
        <StyledTextField
          variant="outlined"
          color="secondary"
          required
          name="username"
          label="Nome"
          value={form.username}
          onChange={handleInputChange}
          type="text"
        />
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
              goToLogin(history);
            }}
            variant="text"
            color="primary"
          >
            Voltar
          </Button>
          <Button type="submit" variant="contained" color="secondary">
            Cadastrar
          </Button>
        </ButtonsContainer>
      </StyledForm>
    </MainContainer>
  );
};

export default SignupPage;
