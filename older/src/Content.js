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
import j21 from './data/2019-07-06-TENDA-ATACADO-LTDA.json';
import j22 from './data/2019-08-29-SUPERMERCADO-BIG-BOM-LTDA.json';
import j23 from './data/2019-09-26-SUPERMERCADO-BIG-BOM-LTDA.json';
import j24 from './data/2019-10-26-SUPERMERCADO-BIG-BOM-LTDA.json';
import j25 from './data/2019-11-26-SUPERMERCADO-BIG-BOM-LTDA.json';
import j26 from './data/2019-12-28-SUPERMERCADO-BIG-BOM-LTDA.json';
import j27 from './data/2020-01-28-SUPERMERCADO-BIG-BOM-LTDA.json';
import j28 from './data/2020-02-27-SUPERMERCADO-BIG-BOM-LTDA.json';
import j29 from './data/2020-03-28-SUPERMERCADO-BIG-BOM-LTDA.json';
import j30 from './data/2020-04-29-SUPERMERCADO-BIG BOM-LTDA.json';
import j31 from './data/2020-05-29-SUPERMERCADO-BIG-BOM-LTDA.json';
import j32 from './data/2020-06-26-SUPERMERCADO-BIG-BOM-LTDA.json';
import j33 from './data/2020-07-23-SUPERMERCADO-BIG-BOM-LTDA.json';
import j34 from './data/2020-08-29-SUPERMERCADO-BIG-BOM-LTDA.json';
import j35 from './data/2020-10-15-SUPERMERCADO-BIG BOM-LTDA.json';
import j36 from './data/2020-11-14-SUPERMERCADO-BIG-BOM-LTDA.json';
import j37 from './data/2020-12-12-SUPERMERCADO-BIG-BOM-LTDA.json';
import j38 from './data/2021-01-06-SUPERMERCADO-BIG BOM-LTDA.json';
import j39 from './data/2021-02-08-SUPERMERCADO-BIG-BOM-LTDA.json';
import j40 from './data/2021-03-10-SUPERMERCADO-BIG-BOM-LTDA.json';
import j41 from './data/2021-04-10-SUPERMERCADO-BIG-BOM-LTDA.json';
import j42 from './data/2021-05-06-SUPERMERCADO-BIG-BOM-LTDA.json';
import j43 from './data/2021-06-03-SUPERMERCADO-BIG-BOM-LTDA.json';

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
      '2019-07-06<br>TENDA': j21,
      '2019-08-29<br>BIG-BOM': j22,
      '2019-09-26<br>BIG-BOM': j23,
      '2019-10-26<br>BIG-BOM': j24,
      '2019-11-26<br>BIG-BOM': j25,
      '2019-12-28<br>BIG-BOM': j26,
      '2020-01-28<br>BIG-BOM': j27,
      '2020-02-27<br>BIG-BOM': j28,
      '2020-03-28<br>BIG-BOM': j29,
      '2020-04-29<br>BIG-BOM': j30,
      '2020-05-29<br>BIG-BOM': j31,
      '2020-06-26<br>BIG-BOM': j32,
      '2020-07-23<br>BIG-BOM': j33,
      '2020-08-29<br>BIG-BOM': j34,
      '2020-10-15<br>BIG-BOM': j35,
      '2020-11-14<br>BIG-BOM': j36,
      '2020-12-12<br>BIG-BOM': j37,
      '2021-01-06<br>BIG-BOM': j38,
      '2021-02-08<br>BIG-BOM': j39,
      '2021-03-10<br>BIG-BOM': j40,
      '2021-04-10<br>BIG-BOM': j41,
      '2021-05-06<br>BIG-BOM': j42,
      '2021-06-03<br>BIG-BOM': j43,
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
