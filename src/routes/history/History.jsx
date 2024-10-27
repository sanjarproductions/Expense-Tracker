import "./History.css"
import { FinanceContext } from "../../context/FinanceContext"
import { useContext, useEffect } from "react"

const History = () => {
  const { transactions, setTransactions, Currency } = useContext(FinanceContext)

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, [setTransactions])

  return (
    <>
      <div className="content history">
        <div className="container">
          <div className="flex" style={{ alignItems: "end", justifyContent: "space-between" }}>
            <h1>History:</h1>
            
            <select style={{ pointerEvents: "none", opacity: 0.5 }}>
              <option value="Recent">Recent</option>
              <option value="Oldest">Oldest</option>
            </select>
            
          </div>
          <ul>
            {
              transactions.length === 0 ? (<p>No Transactions Yet</p>) : (
                transactions.map((transaction, i) => (
                  <li key={i}> <p><i>{transaction.label}</i> : {transaction.type === "income" ? "+" : transaction.type === "expense" ? "-" : ""}{transaction.amount} {Currency}</p>  <p className="transaction-data">{transaction.date}</p></li>
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
