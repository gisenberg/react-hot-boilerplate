import React, { Component } from 'react';
import { connect } from 'react-redux';

export const Todo = React.createClass({
  getInitialState() {
    
    return {
      items: []
    };
  },
  additem(ev){
    if(ev.keyCode == 13){
      this.state.items.push({id : this.state.items.length, 
                            text : this.aToDo.value,
                            isComplete : false});
      this.setState(this.state.items);
      this.aToDo.value = "";
    }
    //console.log(ev.keyCode);
    // this.items = {}
  },
  checked(ev){
    if(this.completedCheck.checked){
      
      this.setState(this.state.items);
    }
  },
  render() {
    return (
      <div>
         <input type="text" ref={(ref) => this.aToDo = ref} onKeyUp={this.additem}/>
        {this.state.items.map(i => {
          if(i.isComplete){
            return (<div className = "disabled">{i.text}</div>)
          } else {
            return (
              <div>
                <input type="checkbox" ref={(ref) => this.completedCheck = ref} onClick={this.checked}/>
                {i.text}
              </div>
             );
          }
        })}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
});
