import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      alert("Logado com sucesso!");
      localStorage.setItem("token", res.data.token);
      goToFeed(history);
    })
    .catch((err) => {
      alert("Erro no login");
      console.log(err);
    });
};

export const signup = (body, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      alert("Cadastrado com sucesso!");
      localStorage.setItem("token", res.data.token);
      goToFeed(history);
    })
    .catch((err) => {
      alert("Erro no login");
      console.log(err);
    });
};