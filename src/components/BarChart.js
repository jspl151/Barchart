import { React } from 'react';
import BarChartHeader from './BarChartHeader';
import DisplayBarChart from './DisplayBarChart';

const BarChart = (context) =>
	<table className="barChart">
		<thead>
			<BarChartHeader/>
		</thead>
		<DisplayBarChart { ...context }/>
	</table>;

export default BarChart;
