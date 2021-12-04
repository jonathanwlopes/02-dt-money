import { useTransactions } from "../../context/TransactionsContext"

import * as S from "./styles"

export const TransactionsTable = () => {
  const { transactions } = useTransactions()

  return (
    <S.Container>
      <S.Table>
        <S.Thead>
          <S.Tr>
            <S.Th>Titulo</S.Th>
            <S.Th>Valor</S.Th>
            <S.Th>Categoria</S.Th>
            <S.Th>Data</S.Th>
          </S.Tr>
        </S.Thead>

        <S.Tbody>
          {transactions.map((transaction) => (
            <S.Tr key={`id-${transaction.id}`}>
              <S.Td>{transaction.title}</S.Td>
              <S.Td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </S.Td>
              <S.Td>{transaction.category}</S.Td>
              <S.Td>{new Intl.DateTimeFormat("pt-BR").format(new Date(transaction.createdAt))}</S.Td>
            </S.Tr>
          ))}
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}
