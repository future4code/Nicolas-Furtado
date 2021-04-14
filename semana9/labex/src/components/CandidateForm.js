import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  background-color: white;
  width: 90vw;
  height: 300px;
  box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.3);
`;

const CandidateForm = () => {
  return (
    <MainContainer>
      <p>CandidateForm</p>
    </MainContainer>
  );
};

export default CandidateForm;
