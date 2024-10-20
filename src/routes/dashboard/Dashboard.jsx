import { useState, useRef, useEffect } from "react"
import "./Dashboard.css"
import cashIcon from "../../assets/CashIcon.svg"


//$0.50 US Premium Cost Inshallah

const Dashboard = () => {
  const [optionValue, setOptionValue] = useState("")

  const [Currency, setCurrency] = useState("USD")
  const [transactions, setTransactions] = useState([])

  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? Number(storedBalance) : 0;
  })

  const TransactionAmount = useRef(null)
  const TransactionLabel = useRef(null)

  function handleSelect(event) {
    setOptionValue(event.target.value)
  }


  function Insert(e) {
    e.preventDefault();

    let saveOptionValue = optionValue;
    let label = TransactionLabel.current.value.trim();
    let amount = Number(TransactionAmount.current.value);

    if (!label) {
      alert("Enter a valid Label")
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Enter a valid Amount")
      return;
    }

    if (saveOptionValue == "income") {
      setBalance(balance + amount);
      transactions.unshift({
        label,
        amount,
        type: saveOptionValue,
        date: new Date().toLocaleString(),
      })
      let data = JSON.stringify(transactions)
      localStorage.setItem("transactions", data)
    }

    else if (saveOptionValue == "expense") {
      setBalance(balance - amount);
      transactions.unshift({
        label,
        amount,
        type: saveOptionValue,
        date: new Date().toLocaleString(),
      })
      let data = JSON.stringify(transactions)
      localStorage.setItem("transactions", data)
    }

    else {
      alert("Please select transaction type, using Select")
    }

    TransactionLabel.current.value = "";
    TransactionAmount.current.value = "";
    setOptionValue("")
  }

  useEffect(() => {
    localStorage.setItem("balance", balance)
  }, [balance])

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    const storedBalance = localStorage.getItem("balance");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
    if (storedBalance) {
      setBalance(Number(storedBalance))
    }
  }, [])

  return (
    <>
      <main>
        <div className="container">
          <section className="balance">
            <div className="flex client-balance__flex">
              <img src={cashIcon} className="" alt="" />
              <p>Balance: </p>
            </div>
            <div>
              <p>{balance} {Currency}</p>
            </div>
          </section>

          <section className="app">
            <div className="inputs">
              <input placeholder="Label" required type="text" ref={TransactionLabel} />
              <input placeholder="Amount" required type="number" ref={TransactionAmount} />
              <p style={{ fontSize: 12 + "px" }}><i>* press Enter</i></p>
            </div>

            <form onSubmit={Insert}>
              <div className="actions">
                <select onChange={handleSelect} value={optionValue}>
                  <option disabled value={""} selected>Select</option>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
                <button>Insert</button>
              </div>
            </form>

          </section>


          <section className="history">
            <ul>
              {
                transactions.map((transaction, i) => (
                  <li key={i}> <p><i>{transaction.label}</i> : {transaction.type === "income" ? "+" : transaction.type === "expense" ? "-" : ""}{transaction.amount} {Currency}</p>  <p>{transaction.date}</p></li>
                ))
              }
            </ul>
          </section>

        </div>
      </main>
    </>
  )
}

export default Dashboard




// + make select requaired
// + reset the select
// + Press Enter to Insert the data
// + Add a Label instead of "Income/Expense" 
// + add simbols +/- to make it visually unuderstandable 
// + make income and expense (selects) not btns

// + local storage
// - 1000 => 1.000 for visual 

// History page
// only last 3-5 transactions onthe main and full history at history.jsx 
// Mobile

// Statisitcs (pie-chart) page
// Starting point (for a lot of people it isn't gonna be $0)
// Stripe Premium


// useEffect(() => {

// }, [])
// []ni ichida narsa yozsangiz (masalan select) usha ozgarganda useeffect ham qaytadan fetch qiladi va qozgaladi


