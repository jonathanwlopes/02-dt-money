import * as S from "./styles"
import logoImage from "../../assets/logo.svg"

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Logo src={logoImage} alt="dt money" />
        <S.Button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </S.Button>
      </S.Content>
    </S.Container>
  )
}
