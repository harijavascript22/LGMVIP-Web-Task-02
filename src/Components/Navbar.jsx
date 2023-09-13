import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BrandName = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const GetUsersButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function Navbar({setPage}) {
  return (
    <NavbarContainer>
      <BrandName>Grid Layout</BrandName>
      <GetUsersButton onClick={()=>setPage(0)}>Get Users</GetUsersButton>
    </NavbarContainer>
  );
}

export default Navbar;
