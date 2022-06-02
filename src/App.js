import React, { Component } from 'react';

export default class App extends Component {

  componentDidMount(){
    console.log("App Component Mount")
  }

  componentWillUnmount(){
    console.log("Component Unmounting");
  }
  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
