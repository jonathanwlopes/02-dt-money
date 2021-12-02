import { useEffect } from "react"
import { api } from "../../services/api"
import * as S from "./styles"

export const TransactionsTable = () => {
  useEffect(() => {
    api.get("/transactions").then((response) => console.log(response.data))
  }, [])

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
          <S.Tr>
            <S.Td>Desenvolvimento de website</S.Td>
            <S.Td className="deposit">R$ 12.000</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/2021</S.Td>
          </S.Tr>

          <S.Tr>
            <S.Td>Aluguel</S.Td>
            <S.Td className="withdraw">-R$ 12.000</S.Td>
            <S.Td>Desenvolvimento</S.Td>
            <S.Td>20/02/2021</S.Td>
          </S.Tr>
        </S.Tbody>
      </S.Table>
    </S.Container>
  )
}
