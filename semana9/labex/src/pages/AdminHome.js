import React from "react";
import Header from "../components/Header";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const AdminHome = () => {
  const history = useHistory();
  return (
    <>
      <Header
        action={() => {
          history.push("/");
        }}
      />
      <p>Página do adm</p>
      <Button onClick={()=>{history.push("/details");}}>Ver detalhes</Button>
    </>
  );
};

export default AdminHome;
