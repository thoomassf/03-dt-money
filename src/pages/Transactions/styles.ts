import styled from 'styled-components'

export const TransactionContainer = styled.main`
  // Manter conteúdo das transações centralizado
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const TransactionsTable = styled.table`
  // Linha da tabela vai ocupar o tamanho máximo disponível
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  // Conteúdo dos itens da linha
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    // Arredondar borda do inicio e final da linha
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

// Declarando possíveis variações de estilização dos valores da linha
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

// Se valor for positivo a é cor verde, se negativo a é cor vermelha
export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
