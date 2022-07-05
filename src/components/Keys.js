import './Keys.css'
import React from "react"

class Key extends React.Component {
  render() {
    const keyType = this.props.symbol
    const keyClass = this.props.keyClass
    const handleKey = this.props.handleKey

    switch (keyType) {
      case "/":
        return <button onClick={() => handleKey(keyType)} className={keyClass}><i className="fa-solid fa-divide"></i></button>
      case "*":
        return <button onClick={() => handleKey(keyType)} className={keyClass}><i className="fa-solid fa-xmark"></i></button>
      case "-":
        return <button onClick={() => handleKey(keyType)} className={keyClass}><i className="fa-solid fa-minus"></i></button>
      case "+":
        return <button onClick={() => handleKey(keyType)} className={keyClass}><i className="fa-solid fa-plus"></i></button>
      case "DEL":
        return <button onClick={() => handleKey(keyType)} className={keyClass}><i className="fa-solid fa-delete-left"></i></button>
      case "<":
        return <button onClick={() => handleKey(keyType)} className={keyClass}><i className="fa-solid fa-angle-left"></i></button>
      default:
        return <button onClick={() => handleKey(keyType)} className={keyClass}>{keyType}</button>
    }
  }
}

export default class Keys extends React.Component {
  constructor(props) {
    super(props)
    this.numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="]
    this.operators = ["DEL", "/", "*", "-", "+"]
  }

  render() {
    return (
      <div className="Keys">
        <div className="Numbers">
          {this.numbers.map((number) =>
            <Key key={"KTR" + number} handleKey={this.props.handleKey} keyClass="numKey" symbol={number}></Key>
          )}
        </div>
        <div className="Operators">
          {this.operators.map((operator) =>
            <Key key={"KTR" + operator} handleKey={this.props.handleKey} keyClass="operatorKey" symbol={operator}></Key>
          )}
        </div>
        <div className="ArrowMenu">
          <Key key={"KTR<"} handleKey={this.props.handleKey} keyClass="arrowKey" symbol="<" />
        </div>
      </div>
    )
  }
}