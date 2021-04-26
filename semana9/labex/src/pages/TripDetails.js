import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import Header from "../components/Header";
import TripCard from "../components/TripCard";
import axios from "axios";
import Candidates from '../components/Candidates'
import CandidatesAproved from '../components/CandidatesAproved'

const MainContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  min-height: 100vh;
  background-image: url(${"./img/background.jpg"});
  background-size: 1000px;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap: 20px;
`;
const CardContainer = styled.div`
  width: 500px;
`;

const TripDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const [trip, setTrip] = useState({});

  useEffect(() => {
    GetTripDetails();
  }, []);

  const GetTripDetails = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/trip/${id}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
        console.log(res.data.trip);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === ""
    ) {
      history.push("/login");
    }
  }, []);
  return (
    <MainContainer>
      <Header
        action={() => {
          history.push("/admin");
        }}
      />
      <CardContainer>
        <TripCard
          name={trip.name}
          planet={trip.planet}
          description={trip.description}
          date={trip.date}
          durationInDays={trip.durationInDays}
        />
      </CardContainer>
      <Candidates tripId={trip.id} candidates={trip.candidates}/>
      <CandidatesAproved list={trip.approved}/>
    </MainContainer>
  );
};

export default TripDetails;
