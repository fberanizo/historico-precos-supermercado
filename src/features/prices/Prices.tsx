import React from 'react';

import { useResizeDetector } from 'react-resize-detector';

import Plot from 'react-plotly.js';

import { useAppSelector } from '../../app/hooks';
import { priceListSelector } from './pricesSlice';

function Prices(props: {visible: boolean}) {
  const { width, ref } = useResizeDetector();
  const priceList = useAppSelector(priceListSelector);
  const { x, y, text, venues, uniqueVenues } = priceList;

  const { visible } = props;

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

  const palette: Array<string> = ["#69b3a2", "#0097a7", "#03a9f4", "#3949ab", "#5e35b1", "#8e24aa", "#f4511e"];
  const color: Array<string> = venues.map(venue => palette[uniqueVenues.indexOf(venue)]);
  const line: string = mode(color);
  const drawerWidth = visible ? 328 : 0;

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
            marker: {color: color, size: 18},
            line: {
              color: line,
              width: 3,
            }
          },
        ]}
        layout={{
          width: Math.max(width! - drawerWidth ?? 1200, 1200),
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
            fixedrange: true,
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
            fixedrange: true,
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

function mode(array: Array<string>) {
  if (array.length === 0) return '#69b3a2';

  let modeMap: any = {},
    maxEl = array[0],
    maxCount = 1;

  for (const element of array) {
    const el = element;

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    } else if (modeMap[el] === maxCount) {
      maxEl += "&" + el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}

export default Prices;
