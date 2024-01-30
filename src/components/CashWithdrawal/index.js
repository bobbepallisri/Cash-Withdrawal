// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Saraha Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="main-ontainer">
        <div className="cash-with-Container">
          <div className="profile-det-container">
            <div className="ini-Container">
              <p className="initial">{initial}</p>
            </div>
            <p className="name">{name}</p>
          </div>
          <div className="bal_Container">
            <p className="remaining-bal">Your Balance</p>
            <p className="balance">
              {balance}
              <br />
              <span className="precent_bal">In Rupees</span>
            </p>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="select-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denom_list">
            {denominationsList.map(eachline => (
              <DenominationItem
                key={eachline.id}
                denominationDetails={eachline}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
