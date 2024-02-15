import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {titleInput: '', amountInput: 0, typeInput: 'INCOME', tList: []}

  changeName = event => {
    this.setState(prevState => ({titleInput: event.target.value}))
  }

  changeAmount = event => {
    this.setState(prevState => ({amountInput: event.target.value}))
  }

  changeType = event => {
    this.setState(prevState => ({typeInput: event.target.value}))
  }

  transaction = event => {
    event.preventDefault()
    const {typeInput, titleInput, amountInput, tList} = this.state
    const display = typeInput === 'INCOME' ? 'Income' : 'Expenses'
    const eachElement = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: typeInput,
      displayText: display,
    }
    this.setState(prevState => ({
      tList: [...prevState.tList, eachElement],
      titleInput: '',
      amountInput: '',
    }))
  }

  getExpenses = () => {
    let expenses = 0
    const {typeInput, titleInput, tList} = this.state
    tList.forEach(each => {
      if (each.type === 'EXPENSES') {
        expenses += each.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    let Income = 0
    const {typeInput, titleInput, tList} = this.state
    tList.forEach(each => {
      if (each.type === 'INCOME') {
        Income += each.amount
      }
    })
    return Income
  }

  deleteTransaction = id => {
    const {tList} = this.state
    const afterDelete = tList.filter(each => each.id !== id)

    this.setState(prevState => ({tList: afterDelete}))
  }

  render() {
    const {titleInput, amountInput, typeInput, tList} = this.state
    const IncomeAmount = this.getIncome()
    const ExpensesAmount = this.getExpenses()
    return (
      <div className="bgcontainer">
        <div className="moneymanagercontainer">
          <h1 className="header">Hi,Rich</h1>
          <p className="paragraph">
            Welcome back to your<span className="spans">MoneyManager</span>
          </p>
        </div>
        <MoneyDetails
          IncomeAmount={IncomeAmount}
          ExpensesAmount={ExpensesAmount}
        />

        <div className="container">
          <form className="inputcontainerc" onSubmit={this.transaction}>
            <h1 className="header">Add Transaction</h1>
            <label htmlFor="Title">Title</label>
            <input
              id="Title"
              className="input"
              type="text"
              placeholder="Title"
              onChange={this.changeName}
              value={titleInput}
            />
            <label htmlFor="Amount">Amount</label>
            <input
              id="Amount"
              className="input"
              type="text"
              placeholder="Amount"
              onChange={this.changeAmount}
              value={amountInput}
            />
            <label htmlFor="type">Type</label>
            <select className="input" id="type" onChange={this.changeType}>
              <option id="INCOME" value="INCOME">
                Income
              </option>
              <option id="EXPENSES" value="EXPENSES">
                Expenses
              </option>
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <ul className="containe">
            <h1 className="header11">History</h1>
            <div className="box">
              <p className="header2">Title</p>
              <p className="paragraph2">AMOUNT</p>
              <p className="paragraph2">TYPE</p>
            </div>
            {tList.map(each => (
              <TransactionItem
                key={each.id}
                each={each}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
