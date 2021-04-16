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

const CandidateForm = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [prof, setProf] = useState("");
  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const [trips, setTrips] = useState([]);
  const [trip, setTrip] = useState("");

  useEffect(() => {
    getTrips();
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

  const ApplyToTrip = () => {
    if(name === '' || !age || prof === '' || text === '' || country === '' || trip === ''){
      return alert('Preencha todos os campos!')
    }
    const body = {
      name,
      age,
      applicationText: text,
      profession: prof,
      country,
    }
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/nicolas-furtado-cruz/trips/${trip}/apply`,body).then((res)=>{
      alert('Proposta enviada com sucesso!')
    }).catch((err)=>{
      alert(err.response.message)
    })
  }

  const ageItens = () => {
    let itens = [];
    for (let i = 20; i < 56; i++) {
      itens.push(<MenuItem value={i}>{i}</MenuItem>);
    }
    return itens;
  };

  const tripsItens = () => {
    return trips.map((trip) => {
      return <MenuItem value={trip.id}>{trip.name}</MenuItem>;
    });
  };

  return (
    <MainContainer>
      <h3>Se inscreva para uma viagem</h3>
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
              setAge(e.target.value);
            }}
            variant="outlined"
            displayEmpty
            value={age}
          >
            <MenuItem value={0} disabled>
              Idade
            </MenuItem>
            {ageItens()}
          </StyledSelect>
          <StyledTextField
            onChange={(e) => {
              setProf(e.target.value);
            }}
            value={prof}
            variant="outlined"
            label="Profissão"
          />
        </div>
        <div>
          <StyledTextField
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            variant="outlined"
            label="Texto de candidatura"
          />
          <StyledSelect
            onChange={(e) => {
              setTrip(e.target.value);
            }}
            variant="outlined"
            displayEmpty
            value={trip}
          >
            <MenuItem value={""} disabled>
              Viagem
            </MenuItem>
            {tripsItens()}
          </StyledSelect>
          <StyledSelect
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            variant="outlined"
            displayEmpty
            value={country}
          >
            <MenuItem value={""} disabled>
              Paises disponíveis
            </MenuItem>
            <MenuItem value={"Brasil"}>Brasil</MenuItem>
            <MenuItem value={"EUA"}>Estados Unidos</MenuItem>
            <MenuItem value={"China"}>China</MenuItem>
            <MenuItem value={"Russia"}>Russia</MenuItem>
            <MenuItem value={"Japão"}>Japão</MenuItem>
          </StyledSelect>
        </div>

        <StyledButton onClick={ApplyToTrip} color="secondary" variant="outlined">
          Enviar
        </StyledButton>
      </FormContainer>
    </MainContainer>
  );
};

export default CandidateForm;
