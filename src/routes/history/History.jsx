import "./History.css"
import { FinanceContext } from "../../contexts/FinanceContext"
import { useContext } from "react"

const History = () => {
  const { transactions, Currency } = useContext(FinanceContext)
  return (
    <>
      <div className="content history">
        <div className="container">
          <h1>History:</h1>
          <ul>
            {
              transactions.length === 0 ? (<p>No Transactions Yet</p>) : (
                transactions.map((transaction, i) => (
                  <li key={i}> <p><i>{transaction.label}</i> : {transaction.type === "income" ? "+" : transaction.type === "expense" ? "-" : ""}{transaction.amount} {Currency}</p>  <p>{transaction.date}</p></li>
                ))
              )
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default History
