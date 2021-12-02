import * as S from "./styles"
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';

export const Summary = () => {
  return <S.Container>
    <S.Wrapper>
      <S.Header>
        <S.Title>Entrada</S.Title>
        <S.IconImage src={incomeImage} alt='Entradas' />
      </S.Header>
      <S.ValueIncome>R$ 1000,00</S.ValueIncome>
    </S.Wrapper>

    <S.Wrapper>
      <S.Header>
        <S.Title>Saidas</S.Title>
        <S.IconImage src={outcomeImage} alt='Saídas' />
      </S.Header>
      <S.ValueOutcome>- R$ 500,00</S.ValueOutcome>
    </S.Wrapper>

    <S.Wrapper className='highlight-background'>
      <S.Header>
        <S.Title>Total</S.Title>
        <S.IconImage src={totalImage} alt='Saídas' />
      </S.Header>
      <S.ValueTotal>R$ 500,00</S.ValueTotal>
    </S.Wrapper>

  </S.Container>
}
