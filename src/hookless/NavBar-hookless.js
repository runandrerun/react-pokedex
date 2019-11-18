import React, { useState } from 'react';
import Pokeball from '../_assets/img/pokeball.svg';
import { HamburgerSpin } from 'react-animated-burgers';
import '../styles/NavBar.css';

export default class NavBar extends Component {

  state = {
    isActive: false
  };

  handleToggle = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    let { isActive } = this.state;
    return (
      <div id="nav-container">
        <nav className="navbar navbar-light navbar-expand-md bg-light justify-content-md-center justify-content-start navbar-custom">
            <a className="navbar-brand d-md-none d-inline" href=""><img src={Pokeball} width="30" height="30" alt="Pokeball" /> <span className="brand-text-buffer">Pokedex</span></a>
            <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                <ul className="navbar-nav mx-auto text-md-center text-left">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="modal" data-target=".tech-modal">Tech</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://runandrerun.github.io/" target="_blank" rel="noopener noreferrer">Creator</a>
                    </li>
                    <li className="nav-item my-auto">
                        <a className="nav-link navbar-brand mx-0 d-none d-md-inline" href=""><img src={Pokeball} width="30" height="30" alt="Pokeball" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.linkedin.com/in/andre-santiago-79724467/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/runandrerun" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
            </div>
            <div className="menu-buffer">
              <HamburgerSpin className="navbar-toggler" isActive={isActive} onClick={() => this.handleToggle()} data-toggle="collapse" data-target="#collapsingNavbar2" barColor="#A9A9A9"/>
            </div>
          </nav>
          <div className="modal fade tech-modal" tabIndex="1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Tech Used</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                <ul className="list-group list-group-flush nav-modal">
                  <li className="list-group-item"><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="tech-link">React</a> <span className="badge badge-primary badge-pill tech-badge">Frontend Framework</span></li>
                  <li className="list-group-item"><a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer" className="tech-link">Chartjs</a> <span className="badge badge-success badge-pill tech-badge">Data Visualization</span></li>
                  <li className="list-group-item"><a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" className="tech-link">Bootstrap 4</a> <span className="badge badge-info badge-pill tech-badge">CSS Styling</span></li>
                  <li className="list-group-item"><a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="tech-link">PokeAPI</a> <span className="badge badge-danger badge-pill tech-badge">API Endpoint</span></li>
                  <li className="list-group-item"><a href="https://cypress.io/" target="_blank" rel="noopener noreferrer" className="tech-link">Cypress</a> <span className="badge badge-secondary badge-pill tech-badge">Test Framework</span></li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};
