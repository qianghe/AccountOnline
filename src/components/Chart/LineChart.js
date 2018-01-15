import React from 'react';
import PropTypes from 'prop-types';
import { Chart, Tooltip, Axis, Bar, Coord } from 'viser-react';

const DataSet = require('@antv/data-set');

const LineChart = ({ sourceData }) => {
  const toolTipItemTpl = '<li data-index={index}>' +
    '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;" />' +
    '</span>消费: {value}</li>';
  const dv = new DataSet.View().source(sourceData);
  dv.transform({
    type: 'sort',
    callback(a, b) {
      return a.cost - b.cost > 0;
    },
  });

  return (
    <Chart
      forceFit
      height={400}
      data={dv.rows}
    >
      <Coord type="rect" direction="LB" />
      <Tooltip itemTpl={toolTipItemTpl} />
      <Axis dataKey="tag" label={{ offset: 12 }} />
      <Bar position="tag*cost" color="#aaa" />
    </Chart>
  );
};

LineChart.defaultProps = {
  sourceData: [],
};
LineChart.propTypes = {
  sourceData: PropTypes.array,
};

export default LineChart;
