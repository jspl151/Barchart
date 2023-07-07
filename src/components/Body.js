import { React } from 'react';
import { map } from '@laufire/utils/collection';

const Body = (context) => {
	const { config: { header }, data } = context;

	return <tbody>
		{map(data, (population, index) =>
			<tr key={ index }>
				{map(header, (heading, key) => {
					const id = heading === 'estimate2022'
						? 'format'
						: '';

					return <td key={ key } className={ id }>
						{population[heading]}</td>;
				})}
			</tr>)}
	</tbody>;
};

export default Body;
