import { React } from 'react';
import { map } from '@laufire/utils/collection';

const backgroundColor = ['red',
	'green',
	'yellow',
	'blue',
	'orange',
	'violet',
	'brown',
	'pink',
	'yellowGreen',
	'lightblue'];

const left = 0.5 ;

const BarChart = (context) => {
	const { data } = context;

	return (
		<div className="formatting">
			{map(data, (population, index) =>
				<div
					key={ index }
					style={ {
						width: '2%',
						left: `${ (index + 1) * left }%`,
						height: `${ population.estimate2022 }%`,
						bottom: '30%',
						backgroundColor: backgroundColor[index],
						position: 'absolute',
						border: '2px solid',
					} }
				>	{population.state}
				</div>)}
		</div>);
};

export default BarChart;
