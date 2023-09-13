// src/components/Loader.js
import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const LoaderCircle = styled.div`
  border: 6px solid #007bff;
  border-top: 6px solid transparent;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
`;

function Loader() {
  return (
    <LoaderContainer>
      <LoaderCircle></LoaderCircle>
    </LoaderContainer>
  );
}

export default Loader;
