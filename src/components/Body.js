import { React } from 'react';
import { map } from '@laufire/utils/collection';

const Body = (context) => {
	const { config: { header }, data: { populationList }} = context;

	return <tbody>
		{map(populationList, (population, index) =>
			<tr key={ index }>
				{map(header, (heading, key) =>
					<td
						key={ key }
						className="tableBorder"
					>
						{population[heading]}</td>)}
			</tr>)}
	</tbody>;
};

export default Body;
