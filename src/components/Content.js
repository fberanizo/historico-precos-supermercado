import { useSelector } from 'react-redux';
import { useResizeDetector } from 'react-resize-detector';

import Plot from 'react-plotly.js';

const priceListSelector = (reducer) => {
  return reducer.priceList;
};

const Content = () => {
  const { width, height } = useResizeDetector();
  const priceList = useSelector(priceListSelector);
  const { x, y, text } = priceList;

  return (
    <>
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
          width: width - 256 ?? 1000,
          height: height ?? 1200,
          title: {
            text: '',
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
    </>
  );
}

export default Content;
