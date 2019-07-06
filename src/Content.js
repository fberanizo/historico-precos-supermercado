import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import Plot from 'react-plotly.js';
import j0 from './data/2018-07-20-SUPERMERCADO-PONTO-NOVO-GUACU-LTDA.json';
import j1 from './data/2018-08-08-GOOD-BOM-SUPERMERCADOS-LTDA.json';
import j2 from './data/2018-09-01-TENDA-ATACADO-LTDA.json';
import j3 from './data/2018-10-01-SUPERMERCADO-BIG-BOM-LTDA.json';
import j4 from './data/2018-10-06-GOOD-BOM-SUPERMERCADOS-LTDA.json';
import j5 from './data/2018-10-06-SUPERMERCADO-BIG-BOM-LTDA.json';
import j6 from './data/2018-10-23-TENDA-ATACADO-LTDA.json';
import j7 from './data/2018-11-16-SUPERMERCADO-BIG-BOM-LTDA.json';
import j8 from './data/2018-11-28-SUPERMERCADO-BIG-BOM-LTDA.json';
import j9 from './data/2018-12-21-SUPERMERCADO-BIG-BOM-LTDA.json';
import j10 from './data/2018-12-29-SUPERMERCADO-BIG-BOM-LTDA.json';
import j11 from './data/2019-01-18-SUPERMERCADO-BIG-BOM-LTDA.json';
import j12 from './data/2019-01-18-TENDA-ATACADO-LTDA.json';
import j13 from './data/2019-02-09-GOOD-BOM-SUPERMERCADOS-LTDA.json';
import j14 from './data/2019-03-06-TENDA-ATACADO-LTDA.json';
import j15 from './data/2019-04-04-SUPERMERCADO-BIG-BOM-LTDA.json';
import j16 from './data/2019-04-27-SUPERMERCADO-BIG-BOM-LTDA.json';
import j17 from './data/2019-05-08-SUPERMERCADO-BIG-BOM-LTDA.json';
import j18 from './data/2019-05-22-GOOD-BOM-SUPERMERCADOS-LTDA.json';
import j19 from './data/2019-06-09-SUPERMERCADO-BIG-BOM-LTDA.json';
import j20 from './data/2019-06-29-ROFATTO.json';

class Content extends Component {
  state = {  title: '', width: 800, height: 900 };
  onResize = (width) => {
    this.setState({width: width});
  }
  render() {
    const data = {
      '2018-07-20<br>PONTO-NOVO': j0,
      '2018-08-08<br>GOOD-BOM': j1,
      '2018-09-01<br>TENDA': j2,
      '2018-10-01<br>BIG-BOM': j3,
      '2018-10-06<br>GOOD-BOM': j4,
      '2018-10-06<br>BIG-BOM': j5,
      '2018-10-23<br>TENDA': j6,
      '2018-11-16<br>BIG-BOM': j7,
      '2018-11-28<br>BIG-BOM': j8,
      '2018-12-21<br>BIG-BOM': j9,
      '2018-12-29<br>BIG-BOM': j10,
      '2019-01-18<br>BIG-BOM.': j11,
      '2019-01-18<br>TENDA': j12,
      '2019-02-09<br>GOOD-BOM': j13,
      '2019-03-06<br>TENDA': j14,
      '2019-04-04<br>BIG-BOM': j15,
      '2019-04-27<br>BIG-BOM': j16,
      '2019-05-08<br>BIG-BOM': j17,
      '2019-05-22<br>GOOD-BOM': j18,
      '2019-06-09<br>BIG-BOM': j19,
      '2019-06-09<br>ROFATTO': j20,
    };
    let x = [];
    let y = [];
    let text = [];
    for (let entry of Object.entries(data)) {
      for (let i = 0; i < entry[1]['names'].length; i++) {
        if (entry[1]['names'][i].match(this.props.regex)) {
          x.push(entry[1]['values'][i]);
          y.push(entry[0]);
          text.push(entry[1]['names'][i] + "<br>R$" + entry[1]['values'][i]);
          break;
        }
      }
    }
    if (x.length === 0) {
      return (<div></div>);
    }
    return (
      <div>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <Plot
          data={[
            {
              x: x,
              y: y,
              text: text,
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: '#1da1ff'},
            },
          ]}
          layout={{
            width: this.state.width,
            height: this.state.height,
            title: {
              text: this.props.title,
              font: {
                family: 'Arial',
                size: 24,
                color: 'rgb(82, 82, 82)'
              },
            },
            xaxis: {
              title: {
                text: 'Menor Preço <<<<              >>>> Maior Preço',
                font: {
                  family: 'Arial',
                  size: 18,
                  color: 'rgb(82, 82, 82)'
                },
              },
              tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
              },
              tickformat: '$.2f',
            },
            yaxis: {
              title: {
                text: '',
                font: {
                  family: 'Arial',
                  size: 18,
                  color: 'rgb(82, 82, 82)',
                },
              },
              tickfont: {
                family: 'Arial',
                size: 12,
                color: 'rgb(82, 82, 82)'
              },
            },
          }}
          />
        </div>
    );
  }
};

export default Content;
