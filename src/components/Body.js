import { React } from 'react';
import { map } from '@laufire/utils/collection';

const Body = (context) => {
	const { config: { header }, data } = context;

	return <tbody>
		{map(data, (population, index) =>
			<tr key={ index }>
				{map(header, (heading, key) => {
					const className = heading === 'estimate2022'
						? 'estimate2022Color'
						: '';

					return (
						<td
							key={ key }
							className={ className }
							style={ { border: '2px solid black' } }
						>
							{population[heading]}</td>);
				})}
			</tr>)}
	</tbody>;
};

export default Body;
