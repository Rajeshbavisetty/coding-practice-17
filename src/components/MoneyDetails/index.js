import './index.css'

const MoneyDetails = props => {
  const {IncomeAmount, ExpensesAmount} = props

  const Amount = IncomeAmount - ExpensesAmount
  return (
    <ul className="MoneyDetailsContainer">
      <li className="itemcontainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="imgsize"
          alt="balance"
        />
        <div className="description">
          <p className="header1">Your Balance</p>
          <p className="paragraph1" data-testid="balanceAmount">
            Rs {Amount}
          </p>
        </div>
      </li>
      <li className="itemcontainer1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="imgsize"
          alt="income"
        />
        <div className="description">
          <p className="header1">Your Income</p>
          <p className="paragraph1" data-testid="incomeAmount">
            Rs {IncomeAmount}
          </p>
        </div>
      </li>
      <li className="itemcontainer2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="imgsize"
          alt="expenses"
        />
        <div className="description">
          <p className="header1">Your Expenses</p>
          <p className="paragraph1" data-testid="expensesAmount">
            Rs {ExpensesAmount}
          </p>
        </div>
      </li>
    </ul>
  )
}
export default MoneyDetails
