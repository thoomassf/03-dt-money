import styled, { css } from 'styled-components'

export const SummaryContainer = styled.div`
  // manter cards centralizados
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  // definir 3 cards com grid
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  // definir posição dos cards mais acima
  margin-top: -5rem;
`

// Declarando possíveis variações de estilização de cards a
interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  // Estilização do card
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  // Cabeçalho do card
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  // Text do valor do card
  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  // Se o card for da variação "green" mudar cor de fundo
  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
