import { Fragment } from "react"
import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"

export const App = () => {
  return (
    <Fragment>
      <Header />
      <Dashboard />
    </Fragment>
  )
}
