import React, { Component } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        chart: {
          width: 700,
          borderColor: "#a5a5a5",
          borderWidth: 1,
          spacingTop: 25,
          spacingBottom: 20,
          spacingLeft: 15,
          spacingRight: 15
        },
        title: {
          text: "Screen Reader Software: Market Share",
          align: 'left',
          x: 10,
          y: 25,
          style: {
            color: '#757575',
            fontSize: "2em",
            fontWeight: 'normal'
          }
        },
        xAxis: {
          categories: [2010, 2012, 2014, 2016, 2018, 2020],
          title: {
            text: "Year",
            style: {
              color: "#000"
            }
          },
          tickmarkPlacement: 'on'
        },
        yAxis: {
          title: {
            text: "Market Share (%)",
            style: {
              color: "#000"
            }
          },
          lineWidth: 1
        },
        legend: {
          layout: "horizontal",
          align: "center",
          verticalAlign: "top"
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: "NVDA",
            data: [34.8, 43, 51.2, 41.4, 64.9, 72.4],
            color: "#4285F4"
          },
          {
            name: "VoiceOver",
            data: [20.2, 30.7, 36.8, 30.9, 39.6, 47.1],
            color: "#EA4335"
          },
          {
            name: "Other",
            data: [42.6, 51.5, 54.2, 45.8, 20.2, 15.4],
            color: "#FBBC05"
          }
        ],
        plotOptions: {
          series: {
            pointPlacement: "on",
            lineWidth: 3,
            marker: {
              enabled: false
            }
          }
        }
      }
    };
  }

  render() {
    const { chartOptions } = this.state;
    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
  }
}

export default App;
