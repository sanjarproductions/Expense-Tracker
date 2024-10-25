import { useState, useRef, useEffect, useContext } from "react"
import "./Dashboard.css"
import { FinanceContext } from "../../contexts/FinanceContext"

// Icons
import cashIcon from "../../assets/CashIcon.svg"


//$0.50 US Premium Cost Inshallah

const Dashboard = () => {
  const { Currency, transactions, setTransactions } = useContext(FinanceContext)

  const [optionValue, setOptionValue] = useState("")
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

    const newTransaction = {
      label,
      amount,
      type: saveOptionValue,
      date: new Date().toLocaleString(),
    };

    if (saveOptionValue == "income") {
      setBalance(balance + amount);
      setTransactions([newTransaction, ...transactions])
    }

    else if (saveOptionValue == "expense") {
      setBalance(balance - amount);
      setTransactions([newTransaction, ...transactions])
    }

    else {
      alert("Please select transaction type, using Select")
    }

    localStorage.setItem("transactions", JSON.stringify([newTransaction, ...transactions]))

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
  }, [setTransactions])

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
                <select onChange={handleSelect} value={optionValue} required>
                  <option disabled value={""}>Select</option>
                  <option value="expense">Expense</option>
                  <option value="income">Income</option>
                </select>
                <button>Insert</button>
              </div>
            </form>

          </section>


          <section className="history">
            <h2 style={{ paddingBottom: 20 + "px" }}>Latest : (3)</h2>
            <ul>
              {
                transactions.slice(0, 3).map((transaction, i) => (
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

// + History page (Alhamdulillah, we learned useContext)
// + only last 3-5 transactions on the main and full history at history.jsx 
// + Mobile

// Home page
// Legal
// - Privacy policy
// - Terms & Conditions
// Mobile responsive inshallah
// Firebase Sighn up & login

// Statisitcs (pie-chart) page
// Starting point (for a lot of people it isn't gonna be $0)
// Stripe/ Lemon / Paddle - Premium (1 week trial and 5/m cost inshallah)
// Mobile App in React Native Inshallah

// useEffect(() => {
// 
// }, [])
// []ni ichida narsa yozsangiz (masalan select) usha ozgarganda useeffect ham qaytadan fetch qiladi va qozgaladi


