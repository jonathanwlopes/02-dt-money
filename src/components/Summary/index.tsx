import * as S from "./styles"
import incomeImage from "../../assets/income.svg"
import outcomeImage from "../../assets/outcome.svg"
import totalImage from "../../assets/total.svg"
import { useTransactions } from "../../context/TransactionsContext"
import { FormatCurrency } from "../../utils/IntlFormat"

export const Summary = () => {
  const { transactions } = useTransactions()

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount
        acc.total += transaction.amount
      } else {
        acc.withdraws += transaction.amount
        acc.total -= transaction.amount
      }

      return acc
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  )

  return (
    <S.Container>
      <S.Wrapper>
        <S.Header>
          <S.Title>Entrada</S.Title>
          <S.IconImage src={incomeImage} alt="Entradas" />
        </S.Header>
        <S.ValueIncome>{FormatCurrency(summary.deposits)}</S.ValueIncome>
      </S.Wrapper>

      <S.Wrapper>
        <S.Header>
          <S.Title>Saidas</S.Title>
          <S.IconImage src={outcomeImage} alt="Saídas" />
        </S.Header>
        <S.ValueOutcome>- {FormatCurrency(summary.withdraws)}</S.ValueOutcome>
      </S.Wrapper>

      <S.Wrapper className="highlight-background">
        <S.Header>
          <S.Title>Total</S.Title>
          <S.IconImage src={totalImage} alt="Saídas" />
        </S.Header>
        <S.ValueTotal>{FormatCurrency(summary.total)}</S.ValueTotal>
      </S.Wrapper>
    </S.Container>
  )
}
