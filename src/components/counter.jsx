import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <button
            style={{ cursor: "context-menu" }}
            className={this.getBadgeClasses()}
          >
            <span>{this.formatCount()}</span>
          </button>
        </div>

        <div className="col">
          <button
            onClick={() => {
              this.props.onIncrement(this.props.counter);
            }}
            className="btn badge-secondary btn-big m-2 "
          >
            +
          </button>
          <button
            onClick={() => {
              this.props.onDecrement(this.props.counter);
            }}
            className={this.getButtonClasses()}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn badge-danger btn-big"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "btn btn-sm m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  getButtonClasses() {
    let classes = "btn badge-secondary btn-big m-2 ";
    classes += this.props.counter.value === 0 ? "disabled" : "";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // Object Destructuring
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
