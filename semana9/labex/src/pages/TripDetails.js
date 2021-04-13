import React from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";

const TripDetails = () => {
  const history = useHistory();

  return (
    <>
      <Header action={()=>{
        history.push('/admin')
      }}/>
      <p>Detalhes de uma viagem</p>
    </>
  );
};

export default TripDetails;
