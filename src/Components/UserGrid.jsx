import React from 'react';
import styled from 'styled-components';

const UserGridContainer = styled.div`
  display: grid;
  width:100%;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const UserCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const UserName = styled.h2`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const UserEmail = styled.p`
  font-size: 0.9rem;
  color: #888;
`;

function UserGrid({ users }) {
  return (
    <UserGridContainer>
      {users.map((user) => (
        <UserCard key={user.id}>
          <UserImage src={user.avatar} alt={`Avatar of ${user.first_name}`} />
          <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserCard>
      ))}
    </UserGridContainer>
  );
}

export default UserGrid;
