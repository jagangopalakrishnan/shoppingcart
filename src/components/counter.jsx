import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
class Counter extends React.Component {
  render() 
  { 
    console.log(this.props);
    return (
      
    <div>
      <span className={this.badgeColour()}>{this.formatValue()}</span>
      <button className="btn btn-secondary" onClick={()=>this.props.onIncrement(this.props.value)}>Increment</button>
      <button className="btn btn-danger m-2" onClick={()=>this.props.onDelete(this.props.value)}>Delete</button>
      </div>
      );
  }

  badgeColour()
  {
    if(this.props.value.value===0) return "badge badge-warning m-2";
    return "badge badge-primary m-2";
  }
  formatValue()
  {
    if(this.props.value.value===0) return "Zero";
    return this.props.value.value;
  }
}
 
export default Counter;