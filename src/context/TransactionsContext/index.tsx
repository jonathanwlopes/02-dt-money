import { createContext, PropsWithChildren, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../../services/api"

interface Transaction {
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransactionsContextProps {
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

interface TransactionInput {
  title: string
  amount: number
  type: string
  category: string
}

const TransactionsContext = createContext<TransactionsContextProps>({} as TransactionsContextProps)

export const TransactionsContextProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date()
    })

    const { transaction } = response.data

    setTransactions([...transactions, transaction])
  }

  useEffect(() => {
    api.get("/transactions").then((response) => setTransactions(response.data.transactions))
  }, [])

  return <TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
}

export const useTransactions = () => {
  const context = useContext(TransactionsContext)

  return context
}
