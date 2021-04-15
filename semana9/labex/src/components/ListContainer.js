import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TripCard from "./TripCard";

const Title = styled.div`
  background-color: white;
  width: 90vw;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
`;

const StyledGridContainer = styled(Grid)`
  width: 90vw;
`;

const ListContainer = (props) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips()
  }, []);

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/trips"
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <Title>
        <h3>Lista de viagens</h3>
      </Title>
      <StyledGridContainer container spacing={1}>
        {trips.map((trip) => {
          return (
            <Grid key={trip.id} lg={4} sm={6} xs={12} item>
              <TripCard details={props.details} name={trip.name} durationInDays={trip.durationInDays} date={trip.date} description={trip.description} planet={trip.planet}/>
            </Grid>
          );
        })}
      </StyledGridContainer>
    </>
  );
};

export default ListContainer;
