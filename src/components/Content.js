import { useSelector } from 'react-redux';
import { useResizeDetector } from 'react-resize-detector';

import Plot from 'react-plotly.js';

const priceListSelector = (reducer) => {
  return reducer.priceList;
};

const Content = () => {
  const { width, height, ref } = useResizeDetector();
  const priceList = useSelector(priceListSelector);
  const { x, y, text } = priceList;

  const today = new Date().toISOString().split('T')[0];
  const max = Math.max(y);

  return (
    <div ref={ref}>
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
          height: 1200,
          title: {
            text: '',
            font: {
              family: 'Arial',
              size: 24,
              color: 'rgb(82, 82, 82)'
            },
          },
          xaxis: {
            range: ['2018-07-01', today],
            type: 'date',
            title: {
              text: 'Data da Compra',
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
          },
          yaxis: {
            range: [0, max],
            title: {
              text: 'Preço',
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
            tickformat: '$.2f',
          },
        }}
      />
    </div>
  );
}

export default Content;
