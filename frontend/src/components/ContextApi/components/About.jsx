import React, { Component } from "react";
import CounterContext from "../context/CounterContext";

export default class About extends Component {
  // One way
  // static contextType = CounterContext;

  render() {
    // console.log('this.context:',this.context)
    return (
      <div className="container">
        <h1 className="my-3">I am Classbased About page </h1>
        <h4 className="my-3">
          Hey Counter is
          <span className="badge bg-secondary">{this.context.count}</span>
        </h4>
      </div>
    );
  }
}

// Another way
About.contextType = CounterContext;

/*
The Two ways we see to access the context in class based component

this.context is similar in both

*/
