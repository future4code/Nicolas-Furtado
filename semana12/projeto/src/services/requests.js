import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeed } from "../routes/coordinator";

export const login = (body, history, setAuth) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      alert("Logado com sucesso!");
      localStorage.setItem("token", res.data.token);
      goToFeed(history);
      setAuth(true);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const signup = (body, history,setAuth) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      alert("Cadastrado com sucesso!");
      localStorage.setItem("token", res.data.token);
      goToFeed(history);
      setAuth(true);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};