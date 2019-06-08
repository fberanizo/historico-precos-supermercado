import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import Plot from 'react-plotly.js';
import j1 from './data/2019-05-22-GOOD-BOM-SUPERMERCADOS-LTDA.json'
import j2 from './data/2019-05-08-SUPERMERCADO-BIG-BOM-LTDA.json'
import j3 from './data/2019-04-27-SUPERMERCADO-BIG-BOM-LTDA.json'
import j4 from './data/2019-04-04-SUPERMERCADO-BIG-BOM-LTDA.json'
import j5 from './data/2019-03-06-TENDA-ATACADO-LTDA.json'
import j6 from './data/2019-02-09-GOOD-BOM-SUPERMERCADOS-LTDA.json'
import j7 from './data/2019-01-18-TENDA-ATACADO-LTDA.json'
import j8 from './data/2019-01-18-SUPERMERCADO-BIG-BOM-LTDA.json'
import j9 from './data/2018-12-29-SUPERMERCADO-BIG-BOM-LTDA.json'
import j10 from './data/2018-12-21-SUPERMERCADO-BIG-BOM-LTDA.json'
import j11 from './data/2018-11-28-SUPERMERCADO-BIG-BOM-LTDA.json'
import j12 from './data/2018-11-16-SUPERMERCADO-BIG-BOM-LTDA.json'
import j13 from './data/2018-10-23-TENDA-ATACADO-LTDA.json'
import j14 from './data/2018-10-06-SUPERMERCADO-BIG-BOM-LTDA.json'
import j15 from './data/2018-10-06-GOOD-BOM-SUPERMERCADOS-LTDA.json'
import j16 from './data/2018-10-01-SUPERMERCADO-BIG-BOM-LTDA.json'
import j17 from './data/2018-09-01-TENDA-ATACADO-LTDA.json'
import j18 from './data/2018-08-08-GOOD-BOM-SUPERMERCADOS-LTDA.json'
import j19 from './data/2018-07-20-SUPERMERCADO-PONTO-NOVO-GUACU-LTDA.json'

class Content extends Component {
  state = {  title: '', width: 800 };
  onResize = (width) => {
    this.setState({width: width});
  }
  render() {
    const data = {
      '2019-05-22-GOOD-BOM-SUPERMERCADOS-LTDA': j1,
      '2019-05-08-SUPERMERCADO-BIG-BOM-LTDA': j2,
      '2019-04-27-SUPERMERCADO-BIG-BOM-LTDA': j3,
      '2019-04-04-SUPERMERCADO-BIG-BOM-LTDA': j4,
      '2019-03-06-TENDA-ATACADO-LTDA': j5,
      '2019-02-09-GOOD-BOM-SUPERMERCADOS-LTDA': j6, 
      '2019-01-18-TENDA-ATACADO-LTDA': j7,
      '2019-01-18-SUPERMERCADO-BIG-BOM-LTDA.': j8,
      '2018-12-29-SUPERMERCADO-BIG-BOM-LTDA': j9,
      '2018-12-21-SUPERMERCADO-BIG-BOM-LTDA': j10,
      '2018-11-28-SUPERMERCADO-BIG-BOM-LTDA': j11,
      '2018-11-16-SUPERMERCADO-BIG-BOM-LTDA': j12, 
      '2018-10-23-TENDA-ATACADO-LTDA': j13,
      '2018-10-06-SUPERMERCADO-BIG-BOM-LTDA': j14,
      '2018-10-06-GOOD-BOM-SUPERMERCADOS-LTDA': j15,
      '2018-10-01-SUPERMERCADO-BIG-BOM-LTDA': j16,
      '2018-09-01-TENDA-ATACADO-LTDA': j17,
      '2018-08-08-GOOD-BOM-SUPERMERCADOS-LTDA': j18,
      '2018-07-20-SUPERMERCADO-PONTO-NOVO-GUACU-LTDA': j19
    };
    let x = [];
    let y = [];
    for (let entry of Object.entries(data)) {
      for (let i = 0; i < entry[1]['names'].length; i++) {
        if (entry[1]['names'][i].match(this.props.regex)) {
          x.push(entry[0]);
          y.push(entry[1]['values'][i]);
          break;
        }
      }
    }
    return (
      <div>
        <ReactResizeDetector handleWidth onResize={this.onResize} />
        <Plot
          data={[
            {
              x: x,
              y: y,
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: '#1da1ff'},
            },
          ]}
          layout={ {width: this.state.width, height: 766, title: this.props.title} }
          />
        </div>
    );
  }
};

export default Content;
