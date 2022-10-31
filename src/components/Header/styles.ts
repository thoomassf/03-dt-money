import styled from "styled-components";

export const HeaderContainer = styled.header`
  // Definir padding e cor de fundo do header
  background: ${props => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  // Manter conteúdo do header centralizado
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  // Definir espaçamento nos intens do header
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewTransactionButton = styled.button`
  // Estilização do botão
  height: 50px;
  border: 0;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`;