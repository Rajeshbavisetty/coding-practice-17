import './index.css'

const TransactionItem = props => {
  const {each, deleteTransaction} = props
  const {title, amount, type, id, displayText} = each
  const deleteItem = () => {
    deleteTransaction(id)
  }

  return (
    <li className="box">
      <h1 className="header2">{title}</h1>
      <p className="paragraph2">{amount}</p>
      <p className="paragraph2">{displayText}</p>
      <button
        type="button"
        className="button1"
        data-testid="delete"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="imgsize1"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
