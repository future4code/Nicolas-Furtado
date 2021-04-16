import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: white;
  min-width: 200px;
  height: 250px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  justify-content: center;
  position: relative;
`;

const Title = styled.h5`
  margin: 0px;
  font-size: 18px;
`;
const Description = styled.p`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;
const OptionLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`;
const OptionValue = styled.span`
  font-size: 15px;
  padding-left: 5px;
  color: rgba(0, 0, 0, 0.7);
`;
const Option = styled.div``;

const Details = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;
const TripCard = (props) => {
  const history = useHistory();
  const deleteTrip = () => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/trips/${props.id}`,
        {
          headers: {
            auth: localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        alert('viagem excluida com sucesso');
        document.location.reload(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <MainContainer>
      {props.details && (
        <Details>
          <IconButton
            onClick={()=>{
              history.push("/details/"+props.id);
            }}
            color="secondary"
            aria-label="voltar"
          >
            <MoreVert />
          </IconButton>
          <IconButton
            onClick={deleteTrip}
            color="secondary"
            aria-label="voltar"
          >
            <DeleteIcon />
          </IconButton>
        </Details>
      )}
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <Option>
        <OptionLabel>Planeta:</OptionLabel>
        <OptionValue>{props.planet}</OptionValue>
      </Option>
      <Option>
        <OptionLabel>Duração:</OptionLabel>
        <OptionValue>{props.durationInDays}</OptionValue>
      </Option>
      <Option>
        <OptionLabel>Data:</OptionLabel>
        <OptionValue>{props.date}</OptionValue>
      </Option>
    </MainContainer>
  );
};

export default TripCard;
