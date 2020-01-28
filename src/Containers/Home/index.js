import React, { Component } from "react";
import styles from "./styles";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
import ContentBasic from '../../Components/ContentBasic'
export default class App extends Component {
  state = {
    showNav: false
  };

  navItems = [
    { id: 0, name: "Inicio", route: "/" },
    { id: 1, name: "Personajes", route: "/personajes" },
    { id: 2, name: "Iniciar Sesion", route: "/login" },    
  ];



  navLinkListener = () => {
    this.setState({showNav :false})
  }

  headerButtonListener = () => {
    this.setState(prevState => {
      return {
        showNav: !prevState.showNav
      };
    });
  };

  render() {
    return (
      <BrowserRouter style={styles.divContainer}>
        <Header clickListener={this.headerButtonListener} />
        <NavBar showNav={this.state.showNav} items={this.navItems} clickEvent={this.navLinkListener}/>
        <Route path="/" exact render={() => <ContentBasic mode="welcome" />} />
        <Route path="/personajes" exact render={() => <ContentBasic mode="personajes" />} />
        <Route path="/login" exact render={() => <h1>Iniciar Sesion</h1>} />
      </BrowserRouter>
    );
  }
}
