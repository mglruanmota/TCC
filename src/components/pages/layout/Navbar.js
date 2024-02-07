import { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from '../image-removebg-preview.png';
import './Navbarstyles.css';

// Componente funcional para a lista de navegação
class Navbar extends Component {
  state = { clicked: false};
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
  return (
    <>
    <nav>
    <a href="/">
            <img src={Logo} alt="logo"/></a>
      
    <div> 
      <ul id="navbar" className=
      {this.state.clicked ? "#navbar active" : "#navbar"}>
        <li> 
          <a className="active" href='../../src/Home.js'> Home </a>
          </li>
          <li> 
          <a href='../../src/Feed.js'> Feed </a>
          </li>
          <li> 
          <a href='../../src/Orcamento.js'> Orçamento </a>
          </li>
          <li> 
          <a href='../../src/Servicos.js'>Serviços </a>
          </li>
          
          </ul>
          </div>     

          <div id="mobile" 
          onClick=
          {this.handleClick}>
            <i id="bar"
            className=
            {this.state.clicked ? 
            "fas fa-times" : "fas fa-bars"}>

            </i>
          </div>
      </nav>
      </>
  );
}
}

export default Navbar;