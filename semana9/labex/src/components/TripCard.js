import { IconButton } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import React from "react";
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
  justify-content:center;
  position: relative;
`;

const Title = styled.h5`
  margin: 0px;
  font-size: 18px;
`
const Description = styled.p`
  font-size: 16px;
  color: rgba(0,0,0,0.7);
`
const OptionLabel = styled.span`
  font-size: 16px;
  font-weight: bold;
`
const OptionValue = styled.span`
  font-size: 15px;
  padding-left: 5px;
  color: rgba(0,0,0,0.7);
`
const Option = styled.div``

const Details = styled(IconButton)`
  position:absolute;
  right: 0px;
  top: 0px;
`

const TripCard = (props) => {
  return (
    <MainContainer>
      {props.details && <Details
          onClick={props.action}
          color="secondary"
          aria-label="voltar"
        >
          <MoreVert/>
        </Details>}
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
