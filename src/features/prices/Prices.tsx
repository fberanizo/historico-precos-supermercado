import React from 'react';

import { useResizeDetector } from 'react-resize-detector';

import Plot from 'react-plotly.js';

import { useAppSelector } from '../../app/hooks';
import { priceListSelector } from './pricesSlice';

function Prices() {
  const { width, ref } = useResizeDetector();
  const priceList = useAppSelector(priceListSelector);
  const { x, y, text } = priceList;

  const inAWeek = new Date();
  inAWeek.setDate(inAWeek.getDate() + 7)
  const inAWeekStr = inAWeek.toISOString().split('T')[0];
  const max = Math.max(...y) + 1.0;

  if (x.length === 0) {
    return (
      <div ref={ref} style={{'alignSelf': 'center', 'flex': '1 1 auto'}}>
        Clique em um produto para ver o histórico.
      </div>
    );
  }

  return (
    <div ref={ref}>
      <Plot
        data={[
          {
            x: x,
            y: y,
            text: text,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: '#69b3a2', size: 14},
            line: {
              color: '#69b3a2',
              width: 3,
            }
          },
        ]}
        layout={{
          width: width! - 328 ?? 1000,
          height: 960,
          title: {
            text: '',
            font: {
              family: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
              size: 24,
              color: 'rgb(82, 82, 82)'
            },
          },
          xaxis: {
            range: ['2018-07-01', inAWeekStr],
            type: 'date',
            title: {
              text: '',
              font: {
                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                size: 18,
                color: 'rgb(82, 82, 82)'
              },
            },
            tickfont: {
              family: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
              size: 16,
              color: 'rgb(82, 82, 82)'
            },
            tickangle: 45,
            tickvals: Array.from(new Set(x)).sort(),
            tickformat: '%d/%b/%Y',
          },
          yaxis: {
            range: [0, max],
            title: {
              text: '',
              font: {
                family: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
                size: 18,
                color: 'rgb(82, 82, 82)',
              },
            },
            tickfont: {
              family: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
              size: 16,
              color: 'rgb(82, 82, 82)'
            },
            tickformat: '$.2f',
            tickprefix: 'R',
            showgrid: true,
            zeroline: true,
            showline: true,
          },
        }}
      />
    </div>
  );
}

export default Prices;
