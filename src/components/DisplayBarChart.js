import { React } from 'react';
import { map, pick } from '@laufire/utils/collection';

const barWidth = 70;

const DisplayBarChart = (context) => {
	const { config: { backgroundColor }, data: { populationList }} = context;
	const maxValue = Math.max(...pick(populationList, 'estimate2022'));

	return <tbody>
		{map(populationList, (population, index) => <tr key={ index }>
			<td>{population.state}</td>
			<td><div style={ { display: 'flex' } }>
				<div style={ {
					width: `${ (population.estimate2022 * barWidth) / maxValue }vw`,
					height: '5vh',
					backgroundColor: backgroundColor[index],
				} }
				/><span className="barChartText">
					{ population.estimate2022}</span>
			</div>
			</td>
		</tr>)}
	</tbody>;
};

export default DisplayBarChart;
