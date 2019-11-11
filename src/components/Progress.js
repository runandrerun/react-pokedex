import React, { Component } from 'react';
import '../styles/Progress.css';

export default class Progress extends Component {

  state = {
    position: null
  };

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  };

  listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = (document.documentElement.scrollHeight - document.documentElement.clientHeight) + 10;

    const scrolled = (winScroll / height) * 100;

    this.setState({
      position: scrolled,
    });
  };

  render() {
    let { position } = this.state;
    return (
    <div className="fixed-bottom">
      <div className="progress progress-style">
        <div className="progress-bar" role="progressbar" style={{width:`${position}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    )
  };
};
