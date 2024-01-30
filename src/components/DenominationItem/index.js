// Write your code here
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denom_item">
      <button
        type="button"
        onClick={onClickDenomination}
        className="Denomination"
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
