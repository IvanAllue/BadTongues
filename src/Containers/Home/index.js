import React, { Component } from "react";
import styles from "./styles";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../../Components/Header";
import NavBar from "../../Components/NavBar";
export default class App extends Component {
  state = {
    showNav: false
  };

  navItems = [
    { id: 0, name: "Inicio", route: "/" },
    { id: 1, name: "Personajes", route: "/personajes" },
    { id: 2, name: "Iniciar Sesion", route: "/login" }
  ];

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
        <NavBar showNav={this.state.showNav} items={this.navItems} />
        <Route path="/" exact render={() => <h1>Inicio</h1>} />
        <Route path="/personajes" exact render={() => <h1>Personajes</h1>} />
        <Route path="/login" exact render={() => <h1>Iniciar Sesion</h1>} />
      </BrowserRouter>
    );
  }
}
