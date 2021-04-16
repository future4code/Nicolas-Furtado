import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: white;
  width: 90vw;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items:center;
`;

const StyledTextField = styled(TextField)`
  margin: 5px;
  width: 300px;
`
const StyledSelect = styled(Select)`
  margin: 5px;
  width: 300px;
`
const StyledButton = styled(Button)`
  margin: 15px;
  width: 100px;
`

const CreateTripForm = () => {
  const [description, setdescription] = useState('');
  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [durationInDays, setDurationInDays] = useState(0);

  const CreateTrip = () => {
    if(name === '' || date === '' || !durationInDays || planet === '' || description === ''){
      return alert('Preencha todos os campos!')
    }
    const body = {
      name,
      planet,
      date,
      description,
      durationInDays
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/trips`, body, {headers:{
      auth: localStorage.getItem('token')
    }}).then((res)=>{
      alert('Viagem criada com sucesso');
    }).catch((err)=>{
      console.log(err.response)
      alert('Você não está autorizado!')
    })
  }

  return (
    <MainContainer>
      <h3>Crie uma viagem</h3>
      <FormContainer>
        <div>
          <StyledTextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            variant="outlined"
            label="Nome"
          />
          <StyledSelect
            onChange={(e) => {
              setPlanet(e.target.value);
            }}
            variant="outlined"
            displayEmpty
            value={planet}
          >
            <MenuItem value={''} disabled>
              Planeta
            </MenuItem>
            <MenuItem value={"Vênus"}>Vênus</MenuItem>
            <MenuItem value={"Terra"}>Terra</MenuItem>
            <MenuItem value={"Marte"}>Marte</MenuItem>
            <MenuItem value={"Plutão"}>Plutão</MenuItem>
            <MenuItem value={"Netuno"}>Netuno</MenuItem>
            <MenuItem value={"Saturno"}>Saturno</MenuItem>
            <MenuItem value={"Mercúrio"}>Mercúrio</MenuItem>
            <MenuItem value={"Urano"}>Urano</MenuItem>
          </StyledSelect>
          <StyledTextField
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            value={description}
            variant="outlined"
            label="Descrição"
          />
        </div>
        <div>
          <StyledTextField
            onChange={(e) => {
              setDate(e.target.value);
            }}
            value={date}
            variant="outlined"
            label="Data"
          />
          <StyledSelect
            onChange={(e) => {
              setDurationInDays(e.target.value);
            }}
            variant="outlined"
            displayEmpty
            value={durationInDays}
          >
            <MenuItem value={0} disabled>
              Duração em dias
            </MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={40}>40</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </StyledSelect>
        </div>

        <StyledButton onClick={CreateTrip} color="secondary" variant="outlined">
          Criar
        </StyledButton>
      </FormContainer>
    </MainContainer>
  );
};

export default CreateTripForm;
