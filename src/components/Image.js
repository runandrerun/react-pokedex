import React, { Component } from 'react';

export default class Image extends Component {
  state = {
    id: null,
  }

  componentWillReceiveProps(newProps) {
    if (newProps.id !== this.props.id) {
      this.setState({
        id: newProps.id
      })
    }
  };

  render() {
    const { id } = this.state;
    if (id) {
    return (
      <img
        src={require(`../_assets/sprites/${id}.png`)}
        onLoad={() => {
          console.log('loaded image!')
        }}
        onLoadStart={() => {
          console.log('load starting')
        }}/>
      )
    } else {
      return <div/>
    }
  }
}
