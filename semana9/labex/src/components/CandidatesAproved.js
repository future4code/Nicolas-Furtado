import React from 'react';
import styled from 'styled-components'

const MainContainer = styled.div`
`

const CandidatesAproved = (props) => {
  return(
    <MainContainer>
      <h2>Candidatos aprovados</h2>
      {props.list && props.list.length === 0 ? 'nenhum aprovado' : props.list && props.list.map((c)=>{
        return <p>{c.name}</p>
      })}
    </MainContainer>
  );
}

export default CandidatesAproved;