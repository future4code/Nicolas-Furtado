import React from "react";
import { useHistory } from "react-router";
import Header from "../components/Header";

const ListTrips = () => {
  const history = useHistory();

  return (
    <>
      <Header
        action={() => {
          history.push("/");
        }}
      />
      <p>ListTrips</p>
    </>
  );
};

export default ListTrips;
