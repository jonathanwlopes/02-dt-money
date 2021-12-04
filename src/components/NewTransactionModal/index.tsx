import * as S from "./styles"
import closeImage from "../../assets/close.svg"
import incomeImage from "../../assets/income.svg"
import withdrawImage from "../../assets/outcome.svg"
import { FormEvent, useState } from "react"
import Modal from "react-modal"
import { useTransactions } from "../../context/TransactionsContext"

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions()

  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("deposit")

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type,
    })
    
    setTitle("")
    setCategory("")
    setAmount(0)
    setType("deposit")
    onRequestClose()
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <S.ButtonClose onClick={onRequestClose} className="react-modal-close">
        <S.CloseImage src={closeImage} alt="Fechar Modal" />
      </S.ButtonClose>

      <S.Container onSubmit={handleCreateNewTransaction}>
        <S.Title>Cadastrar Transação</S.Title>
        <S.Input placeholder="Titulo" value={title} onChange={(e) => setTitle(e.target.value)} />
        <S.Input placeholder="Valor" value={amount} type="number" onChange={(e) => setAmount(Number(e.target.value))} />
        <S.TransactionTypeContainer>
          <S.RadioBox type="button" onClick={() => setType("deposit")} isActive={type === "deposit"} activeColor="green">
            <S.IncomeImage src={incomeImage} alt="Entrada" />
            <S.TextButton>Entrada</S.TextButton>
          </S.RadioBox>

          <S.RadioBox type="button" onClick={() => setType("withdraw")} isActive={type === "withdraw"} activeColor="red">
            <S.WithdrawImage src={withdrawImage} alt="Retirada" />
            <S.TextButton>Saida</S.TextButton>
          </S.RadioBox>
        </S.TransactionTypeContainer>
        <S.Input placeholder="Categoria" value={category} onChange={(e) => setCategory(e.target.value)} />
        <S.ButtonSubmit type="submit">Cadastrar</S.ButtonSubmit>
      </S.Container>
    </Modal>
  )
}
