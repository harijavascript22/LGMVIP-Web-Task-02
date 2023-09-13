// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import UserGrid from './Components/UserGrid';




import Pagination from './Components/Pagination';
import styled from 'styled-components';
import Loader from './Components/Loader';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  min-height: 100vh;
  min-width:80%;
  padding:10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      fetchUsers(page);
    },500)
  }, [page]);

  return (
    <>
      <Navbar setPage={setPage} />
    <AppContainer>
      {loading ? <Loader/> : <UserGrid users={users} />}
      <Pagination   currentPage={page} onPageChange={setPage} />
    </AppContainer>
    </>
  );
}

export default App;
