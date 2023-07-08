import { React } from 'react';
import { map } from '@laufire/utils/collection';

const Body = (context) => {
	const { config: { header }, data } = context;

	return <tbody>
		{map(data, (population, index) =>
			<tr key={ index }>
				{map(header, (heading, key) =>
					<td
						key={ key }
						className="applyBorder"
					>
						{population[heading]}</td>)}
			</tr>)}
	</tbody>;
};

export default Body;
