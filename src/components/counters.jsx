import React, { Component } from 'react';
import Counter from './counter';
class Counters extends React.Component {
  state={
    value:[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}]
  };

  render() { 
    return (
    <div>
      <span className="badge badge-primary">cart</span>
      <span className="badge badge-secondary">{this.state.value.length}</span>
      <button className="btn btn-danger m-2" onClick={this.ResetHandle}>Reset</button>
     {this.state.value.map(v=><Counter key={v.id} value={v} onIncrement={this.IncHandle} onDelete={this.DelHandle} />)}
    </div>
    );
  }
  ResetHandle=()=>
  {
    let m=[{id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}];
    this.setState({value: m});
  }
  IncHandle=(v)=>
  {
  const values=[...this.state.value];
  const index=values.indexOf(v);
  values[index].value++;
  this.setState({value:values});

  }
  DelHandle=(v)=>
  {
    const valued=this.state.value.filter(val=>val.id!==v.id);
    this.setState({value: valued});
  }
}
 
export default Counters;