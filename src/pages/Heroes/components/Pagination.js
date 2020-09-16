import React, { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { PaginationButton, PaginationDiv } from './Styled';

function Pagination({ total, count, offset, getHeroes }) {
  const [indices, setIndices] = useState([]);
  const [prevNextPage, setPrevNextPage] = useState([]);

  useEffect(() => {
    // Calcula página exibida em tela
    const actual = offset / 20 + 1;
    let values = new Array(5).fill(undefined);
    // Calcula os valores a serem retornados pela paginação
    if (total - offset - count >= 80 || !total) {
      values = values.map((item, index) => actual + index);
    } else {
      values = values.map((item, index) => actual - index).reverse();
    }
    setIndices(values);
    // Seta os valores das páginas a serem retornadas no botão de página seguinte e anterior
    setPrevNextPage([actual - 1, actual + 1]);
  }, [offset]);

  // Calcula o valor do offset a partir da página clicada
  // Se a página for a primeira, seu offset(quantidade de herois pulados)
  // é de (1-1)*20 = 0;
  const getOffset = (page) => {
    const newOffset = (page - 1) * 20;
    getHeroes(newOffset);
  };

  // Desabilita o botão de página seguinte se o offset somado a quantidade de items
  // retornados na consulta for igual ao valor total de herois presentes na API
  const disableNextButton = () => {
    const values = offset + count;
    return values === total;
  };

  return (
    <PaginationDiv>
      <PaginationButton
        disabled={offset === 0}
        onClick={() => getOffset(prevNextPage[0])}
        style={{ marginRight: 50 }}
      >
        <FaChevronLeft size={20} />
        Previous
      </PaginationButton>
      {indices.map((indice, index) => (
        <PaginationButton
          onClick={() => getOffset(indice)}
          key={index.toString()}
          style={{ fontWeight: indice === offset / 20 + 1 ? 'bold' : 'normal' }}
        >
          {indice}
        </PaginationButton>
      ))}
      <PaginationButton
        disabled={disableNextButton()}
        onClick={() => getOffset(prevNextPage[1])}
        style={{ marginLeft: 50 }}
      >
        Next
        <FaChevronRight size={20} />
      </PaginationButton>
    </PaginationDiv>
  );
}

export default Pagination;
