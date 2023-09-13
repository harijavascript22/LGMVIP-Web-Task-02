// src/components/Pagination.js
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
position: absolute;
bottom: 20px; /* Adjust the distance from the bottom as needed */
left: 0;
right: 0;
display: flex;
justify-content: center;
align-items: center;
`;

const PageButton = styled.button`
  background-color: ${(props) => (props.active ? '#007bff' : '#fff')};
  color: ${(props) => (props.active ? '#fff' : '#007bff')};
  padding: 0.5rem 1rem;
  border: 1px solid #007bff;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin: 0.2rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #0056b3;
    color: #fff;
  }
`;

function Pagination({ currentPage, onPageChange }) {
  const totalPages = 2; // Update with the total number of pages

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <PageButton
          key={index}
          active={currentPage === index + 1}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </PageButton>
      ))}
    </PaginationContainer>
  );
}

export default Pagination;
