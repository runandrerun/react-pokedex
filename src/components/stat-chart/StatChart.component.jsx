import React, { Component } from 'react';
import { Polar } from 'react-chartjs-2';

export default class StatChart extends Component {

  render() {
    const data = {
      labels: this.props.statNames,
      datasets: [
        {
          // label
          fill: false,
          lineTension: 0.1,
          backgroundColor: ["rgba(240, 96, 97, 0.5)", "rgba(5, 155, 255, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(34, 139, 34, 0.5)", "rgba(127, 219, 255, 0.5)", "rgba(177, 13, 201, 0.5)"],
          borderColor: ["rgba(240, 96, 97, 0)", "rgba(5, 155, 255, 0)", "rgba(255, 206, 86, 0)", "rgba(34, 139, 34, 0)", "rgba(127, 219, 255, 0)", "rgba(177, 13, 201, 0)"],
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: ["#f06061", "#059BFF", "#ffce56", "#228b22", "#7FDBFF", "#B10DC9"],
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: ["rgba(240, 96, 97, 1)", "rgba(5, 155, 255, 1)", "rgba(255, 206, 86, 1)", "rgba(34, 139, 34, 1)", "rgba(127, 219, 255, 0.5)", "rgba(177, 13, 201, 1)"],
          pointHoverBorderColor: ["rgba(240, 96, 97, 1)", "rgba(5, 155, 255, 1)", "rgba(255, 206, 86, 1)", "rgba(34, 139, 34, 1)", "rgba(127, 219, 255, 0.5)", "rgba(177, 13, 201, 1)"],
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.baseStats
        }
      ]
    };

    return (
      <div>
        <Polar ref="chart" data={data} />
      </div>
    );
  };
};
