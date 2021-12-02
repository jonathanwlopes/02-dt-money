import { Fragment, useState } from "react"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import Modal from "react-modal"

Modal.setAppElement("#root")

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <Fragment>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>
    </Fragment>
  )
}
