import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useAddTransaction } from "./hook/useAddTransaction";
import { useGetUserInfo } from "./hook/useGetUserInfo";
import { useGetTransactions } from "./hook/useGetTransactions";

function Home() {
  const navigate = useNavigate();
  const { userID, email } = useGetUserInfo();

  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionTotals;

  const handleExpense = (e) => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
    setDescription("");
    setTransactionAmount("");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if user is not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <div className="head">
        <h1>My Piggy Goals</h1>
        <h2>Hello, {email}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="expense-tracker">
        <div className="container">
          <div className="balance">
            <h3>Your Balance </h3>
            {balance >= 0 ? <h2> ${balance}</h2> : <h2> -${balance * -1}</h2>}
          </div>
          <div className="summary"></div>
          <div className="income">
            <h4>Income</h4>
            <p>${income}</p>
          </div>
          <div className="expenses">
            <h4>Expenses</h4>
            <p>${expenses}</p>
          </div>

          <Form className="add-transaction">
            <input
              type="text"
              placeholder="Description:"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount:"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType === "expense"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="expense">Expense</label>
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType === "income"}
              onChange={(e) => setTransactionType(e.target.value)}
            />
            <label htmlFor="income">Income</label>

            <Button onClick={handleExpense}>Add Transcation</Button>
          </Form>

          <div className="transcations">
            <h3>Transaction</h3>
            <ul>
              {transactions.map((transaction) => {
                const { description, transactionAmount, transactionType } =
                  transaction;
                return (
                  <li>
                    <h4> {description} </h4>
                    <p>
                      ${transactionAmount} •{" "}
                      <label
                        style={{
                          color:
                            transactionType === "expense" ? "red" : "green",
                        }}
                      >
                        {" "}
                        {transactionType}{" "}
                      </label>
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
