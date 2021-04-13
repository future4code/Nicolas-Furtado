import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const Home = () => {
  const history = useHistory();

  return (
    <>
      <p>Home</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/list");
        }}
      >
        Sou user
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          history.push("/login");
        }}
      >
        Sou adm
      </Button>
    </>
  );
};

export default Home;
