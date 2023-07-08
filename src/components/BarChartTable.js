import { React } from 'react';
import BarChartHeader from './BarChartHeader';
import BarChartBody from './BarChartBody';

const BarChartTable = (context) =>
	<table className="barChart">
		<thead>
			<BarChartHeader/>
		</thead>
		<BarChartBody { ...context }/>
	</table>;

export default BarChartTable;
