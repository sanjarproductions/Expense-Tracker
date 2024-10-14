import { useState } from "react"
import { useRef } from "react"
import "./App.css"

import cashIcon from "./assets/CashIcon.svg"

//$0.50 US Premium Cost Inshallah

const App = () => {
  const [Currency, setCurrency] = useState("USD")
  const [transactions, setTransactions] = useState([])
  const [Change, setChange] = useState(0)
  const inpRef = useRef(null)
  const date = new Date().toLocaleDateString()

  function Income() {
    let amount = Number(inpRef.current.value);
    if (amount > 0) {
      setChange(Change + amount);
      transactions.unshift({
        type: "Income",
        amount,
        date,
      })
      alert("Should be bigger than zero")
    }
    inpRef.current.value = "";
  }

  function Expense() {
    let amount = Number(inpRef.current.value);
    if (amount > 0) {
      setChange(Change - amount);
      transactions.unshift({
        type: "Expense",
        amount,
        date,
      })
      alert("Should be bigger than zero")
    }
    inpRef.current.value = "";
  }

  console.log(transactions)

  return (
    <>
      <nav>
        <div className="container">
          <div className="flex">
            <img className="logo" src="/favicon.svg" alt="" />
            <div>
              <a href="">Statistics/History</a>
              <a href="">Premium</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <section className="balance">
            <div className="flex client-balance__flex">
              <img src={cashIcon} className="" alt="" />
              <p>Balance: </p>
            </div>
            <div>
              <p>{Change} {Currency}</p>
            </div>
          </section>

          <section className="something">
            <input placeholder="Label" required type="text" id="inp" />
            <input placeholder="Amount" required type="text" id="inp" ref={inpRef} />

            <div className="btns">
              <button onClick={Income}>Income</button>
              <button onClick={Expense}>Expense</button>
            </div>
          </section>


          <section className="history">
            <ul>
              {
                transactions.map((transaction, i) => (
                  <li key={i}>{transaction.type} : {transaction.amount} {Currency}, {transaction.date}</li>
                ))
              }
            </ul>
          </section>

        </div>
      </main>
    </>
  )
}

export default App



// const [Count, setCount] = useState(0)

// function Counter() {
//   setCount(Count + 1)
// }