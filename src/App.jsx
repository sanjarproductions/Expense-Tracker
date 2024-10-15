import { useState } from "react"
import { useRef } from "react"
import "./App.css"

import cashIcon from "./assets/CashIcon.svg"

//$0.50 US Premium Cost Inshallah

const App = () => {
  const [Currency, setCurrency] = useState("USD")
  const [transactions, setTransactions] = useState([])
  const [Change, setChange] = useState(0)
  const TransactionAmount = useRef(null)
  const TransactionLabel = useRef(null)

  const date = new Date().toLocaleDateString()

  function Income() {
    let label = String(TransactionLabel.current.value)
    let amount = Number(TransactionAmount.current.value);
    if (amount > 0) {
      setChange(Change + amount);
      transactions.unshift({
        label,
        amount,
        date,
      })
    }
    else {
      alert("Should be bigger than zero")
    }
    TransactionLabel.current.value = "";
    TransactionAmount.current.value = "";
  }

  function Expense() {
    let amount = Number(TransactionAmount.current.value);
    if (amount > 0) {
      setChange(Change - amount);
      transactions.unshift({
        type: "Expense",
        amount,
        date,
      })
    }
    TransactionLabel.current.value = "";
    TransactionAmount.current.value = "";
  }

  console.log(transactions)

  return (
    <>
      <nav>
        <div className="container">
          <div className="flex">
            <img className="logo" src="/favicon.svg" alt="" />
            <div>
              <a href="#">Statistics/History</a>
              <a href="#">Premium</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">

          {/* <select name="" id="">
            <option disabled selected>Select</option>
            <option value="expense"  >Expense</option>
            <option value="income" >Income</option>
          </select> */}

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
            <div>
              <input placeholder="Label" required type="text" id="inp" ref={TransactionLabel} />
              <input placeholder="Amount" required type="text" id="inp" ref={TransactionAmount} />
            </div>

            <div className="btns">
              <button onClick={Income}>Income</button>
              <button onClick={Expense}>Expense</button>
            </div>
          </section>


          <section className="history">
            <ul>
              {
                transactions.map((transaction, i) => (
                  <li key={i}>{transaction.label} : {transaction.amount} {Currency}, {transaction.date}</li>
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





// Add a Label instead of "Income/Expense"
// add simbols +/- to make it visually unuderstandable 

// local storage
// 1000 => 1.000 for visual 
// History & Statisitcs(pie-chart) page
// Mobile
// Starting point (for a lot of people it isn;t gonna be $0)
// Stripe Premium
