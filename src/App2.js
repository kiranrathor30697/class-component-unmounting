import React, { Component } from 'react';

export default class App2 extends Component {

    componentDidMount(){
        console.log("App2 Component Mount")
      }
      componentWillUnmount(){
          console.log("Component Unmounting")
      }
  render() {
    return (
      <div>
        <h1>Friends</h1>
      </div>
    );
  }
}
