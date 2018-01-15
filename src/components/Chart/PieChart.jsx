import React from 'react';
// import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
  Chart, Tooltip, Axis, Legend, Coord, Pie,
} from 'viser-react';

const DataSet = require('@antv/data-set');

const PieChart = ({ sourceData }) => {
  const config = {
    type: 'percent',
    field: 'cost',
    dimension: 'tag',
    as: 'percent',
  };
  const dv = new DataSet.View().source(sourceData);
  dv.transform(config);
  // console.log('data', srouceData, dv.rows);
  return (
    <Chart
      forceFit
      height={400}
      data={dv.rows}
      scale={{ dataKey: 'percent', min: 0, formatter: '.0%' }}
    >
      <Tooltip showTitle={false} />
      <Axis />
      <Legend dataKey="tag" />
      <Coord type="theta" radius={0.75} innerRadius={0.6} />
      <Pie
        position="percent"
        color={['tag', ['#aaa', '#ccc', '#eee', '#ddd']]}
        style={{ stroke: '#fff', lineWidth: 1 }}
        label={['percent', {
          formatter: (val, item) => {
            return item.point.tag + ': ' + val;
          },
        }]}
      />
    </Chart>
  );
};

PieChart.defaultProps = {
  sourceData: [],
};
PieChart.propTypes = {
  sourceData: PropTypes.array,
};

export default PieChart;
