import React, { Component } from "react";
import Header from "../../Components/Header";

export default class App extends Component {
  state = {
    showNav: false
  }

  headerButtonListener = () => {
    this.setState((prevState) => {
      return {
        showNav: !prevState.showNav
      }
    })        
  }

  render() {
    return (
      <div>
        <Header clickListener={this.headerButtonListener}/>
        <p style={{height: 100, backgroundColor: 'red',}}>textInComponent{" "}</p>
        
      </div>
    );
  }
}
