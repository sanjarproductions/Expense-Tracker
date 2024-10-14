import { useState } from "react"
import { useRef } from "react"

//$0.50 US Premium Cost

const App = () => {
  const [Currency, setCurrency] = useState("USD")
  const [transactions, setTransactions] = useState([])
  const [Change, setChange] = useState(0)
  const inpRef = useRef(null)
  const date = new Date().toLocaleDateString()

  function Income() {
    let amount = Number(inpRef.current.value);
    setChange(Change + amount);
    transactions.unshift({
      type: "Income",
      amount,
      date,
    })
    inpRef.current.value = "";
  }

  function Expense() {
    let amount = Number(inpRef.current.value);
    setChange(Change - amount);
    transactions.unshift({
      type: "Expense",
      amount,
    })
    inpRef.current.value = "";
  }

  console.log(transactions)

  return (
    <>
      <p>Balance: {Change} {Currency}</p>
      <input type="text" id="inp" ref={inpRef} /> <br />
      <button onClick={Income}>Income</button>
      <button onClick={Expense}>Expense</button>

      <div>
        <ul>
          {
            transactions.map((transaction, i) => (
              <li key={i}>{transaction.type} : {transaction.amount} {Currency}, {transaction.date}</li>
            ))
          }
        </ul>
      </div>

    </>
  )
}

export default App



// const [Count, setCount] = useState(0)

// function Counter() {
//   setCount(Count + 1)
// }