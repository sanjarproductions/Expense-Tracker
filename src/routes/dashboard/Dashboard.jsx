import { useState, useRef, useEffect } from "react"
import "./Dashboard.css"
import cashIcon from "../../assets/CashIcon.svg"


//$0.50 US Premium Cost Inshallah

const Dashboard = () => {
  const [optionValue, setOptionValue] = useState("")

  const [Currency, setCurrency] = useState("USD")
  const [transactions, setTransactions] = useState([])
  const [Change, setChange] = useState(0)
  const TransactionAmount = useRef(null)
  const TransactionLabel = useRef(null)

  // trying to make 1000 => 1.000 
  // const [inputValue, setInputvalue] = useState("")
  // function splitTransactionAmount(event) {
  //   let newValue = Number(event.target.value)
  //   if (newValue > 1000) {
  //     setInputvalue(newValue.toLocaleString())
  //     console.log(inputValue)
  //   }
  // }

  function saveToLocalStorage() {
    localStorage.setItem("Expense", "10")
  }

  function getItemFromLocalStorage() {
    console.log(localStorage.getItem("Expense"))
  }

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
      setChange(Change + amount);
      transactions.unshift({
        label,
        amount,
        type: saveOptionValue,
        date: new Date().toLocaleString(),
      })
      let string = JSON.stringify(transactions)
      localStorage.setItem("transaction", string)
    }

    else if (saveOptionValue == "expense") {
      setChange(Change - amount);
      transactions.unshift({
        label,
        amount,
        type: saveOptionValue,
        date: new Date().toLocaleString(),
      })
      // localStorage.setItem(transactions)
    }

    else {
      alert("Please select transaction type, using Select")
    }

    TransactionLabel.current.value = "";
    TransactionAmount.current.value = "";
    setOptionValue("")
  }

  // useEffect(() => {

  // }, [])
  // []ni ichida narsa yozsangiz (masalan select) usha ozgarganda useeffect ham qaytadan fetch qiladi va qozgaladi

  return (
    <>
      <main>
        <div className="container">
          {/* <button onClick={saveToLocalStorage}>Save to LS</button> */}
          {/* <button onClick={getItemFromLocalStorage}>Get from LS</button> */}

          <section className="balance">
            <div className="flex client-balance__flex">
              <img src={cashIcon} className="" alt="" />
              <p>Balance: </p>
            </div>
            <div>
              <p>{Change} {Currency}</p>
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
              {/* {
                transactions.map((transaction, i) => (
                  <li key={i}> <p><i>{transaction.label}</i> : {transaction.type === "income" ? "+" : transaction.type === "expense" ? "-" : ""}{transaction.amount} {Currency}</p>  <p>{transaction.date}</p></li>
                ))
              } */}
              {
                localStorage.getItem("transaction")
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

// local storage
// - 1000 => 1.000 for visual 

// History page
// only last 3-5 transactions onthe main and full history at history.jsx 
// Mobile

// Statisitcs (pie-chart) page
// Starting point (for a lot of people it isn't gonna be $0)
// Stripe Premium
