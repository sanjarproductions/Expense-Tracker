// import PropTypes from "prop-types"
import "./History.css"
import { FinanceContext } from "../../contexts/FinanceContext"
import { useContext } from "react"

//{ transactions, Currency }
const History = () => {
  const { transactions, Currency, } = useContext(FinanceContext)
  return (
    <>
      <div className="container">
        <h1>History</h1>
        <ul>
          {
            transactions.map((transaction, i) => (
              <li key={i}> <p><i>{transaction.label}</i> : {transaction.type === "income" ? "+" : transaction.type === "expense" ? "-" : ""}{transaction.amount} {Currency}</p>  <p>{transaction.date}</p></li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

// History.propTypes = {
//   transactions: PropTypes.array.isRequired,
//   Currency: PropTypes.string.isRequired
// }

export default History
