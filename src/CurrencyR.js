import React from 'react'

export default function CurrencyR(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount

  } = props
  return (
    <div className="input-select-container">
      <input className="input-ob" type="number" value={amount} onChange={onChangeAmount} />
      <select className="select-ob" value={selectedCurrency} onChange={onChangeCurrency}  >
        {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>

        ))}

      </select>

    </div>
  )
}
