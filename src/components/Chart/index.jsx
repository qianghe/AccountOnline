import React, { Component } from 'react';
import { dispatchCors } from '@lib/fetchDispatch';
import RandomColor from '@lib/RandomColor';
import PieChart from './PieChart';
import LineChart from './LineChart';
import Select from '../Common/Select/index';
import './index.scss';

class ChartPage extends Component {
  /*eslint react/sort-comp: 0*/
  chartTypes = ['Pie', 'Line'];
  state = {
    chartType: 'pie',
    data: [],
    colors: RandomColor({ hue: 'monochrome', count: this.chartTypes.length }),
  }
  componentDidMount() {
    this.fetchChartData();
  }
  fetchChartData = () => {
    const { chartType } = this.state;

    dispatchCors({
      url: '/account/chartData',
      method: 'get',
      params: { type: chartType },
    }).then(({ respCode, respData }) => {
      console.log('respData', respData);
      if (respCode === 10001) {
        this.setState({
          data: respData,
        });
      }
    });
  }
  selectChartType = (type) => {
    const { chartType } = this.state;
    if (chartType !== type) {
      this.setState({
        chartType: type,
      });
    }
  }
  render() {
    const { chartType, colors, data } = this.state;
    return (
      <div className="chart-page">
        <div className="chart-page-header">
          <div>
            <span>时间：</span>
            <p>2018</p>
            <Select
              defaultValue="1月"
              options={Array.from({ length: 12 }, (i, index) => `${index + 1}月`)}
              style={{ width: 80 }}
              onChange={(value) => { console.log(value); }}
            />
          </div>
          <div className="chart-page-filter">
            <span>图表类型：</span>
            {
              this.chartTypes.map((chart, index) => (
                <span
                  key={`type-${chart}`}
                  style={{ backgroundColor: colors[index] }}
                  className="chart-type"
                  onClick={() => this.selectChartType(chart.toLowerCase())}
                >
                  {chart}
                </span>
              ))
            }
          </div>
        </div>
        <div
          className="chart-page-content"
          style={{ width: 500 }}
        >
          {
            chartType === 'pie' ?
              <PieChart sourceData={data} /> : <LineChart sourceData={data} />
          }
        </div>
      </div>
    );
  }
}

export default ChartPage;
