import { Grid, IconButton } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: white;
  min-width: 200px;
  height: 320px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  justify-content: center;
  position: relative;
  span {
    font-weight: bold;
  }
`;

const Details = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

const StyledGridContainer = styled(Grid)`
  width: 90vw;
`;

const aprove = (id, tripId, decision) => {
  axios
    .put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/trips/${tripId}/candidates/${id}/decide`,
      {
        approve: decision,
      },
      {
        headers: {
          auth: localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      alert("Decisão registrada!");
      document.location.reload(true);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

const Candidates = (props) => {
  return (
    <MainContainer>
      <h2>Candidatos em análise</h2>
      <StyledGridContainer container spacing={1}>
        {props.candidates &&
          props.candidates.map((candidate) => {
            return (
              <Grid key={candidate.id} lg={4} sm={6} xs={12} item>
                <Card>
                  <Details>
                    <IconButton
                      onClick={() => {
                        aprove(candidate.id, props.tripId, false);
                      }}
                      color="secondary"
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => {
                        aprove(candidate.id, props.tripId, true);
                      }}
                      color="secondary"
                    >
                      <ThumbUpIcon />
                    </IconButton>
                  </Details>
                  <h4>{candidate.name}</h4>
                  <p>{candidate.applicationText}</p>
                  <p>
                    <span>profissão:</span>
                    {candidate.profession}
                  </p>
                  <p>
                    <span>idade:</span>
                    {candidate.age}
                  </p>
                  <p>
                    <span>pais:</span>
                    {candidate.country}
                  </p>
                </Card>
              </Grid>
            );
          })}
      </StyledGridContainer>
    </MainContainer>
  );
};

export default Candidates;
