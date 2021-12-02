import * as S from "./styles"
import logoImage from "../../assets/logo.svg"

export const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logoImage} alt="dt money" />
        <S.Button type="button">Nova Transação</S.Button>
      </S.Content>
    </S.Container>
  )
}
