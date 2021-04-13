import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const Login = () => {
  const history = useHistory();

  return (
    <>
      <Header
        action={() => {
          history.push("/");
        }}
      />
      <p>página de login</p>
      <Button variant='contained' color='primary' onClick={()=>{history.push("/admin");}}>logar</Button>
    </>
  );
};

export default Login;
