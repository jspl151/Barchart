import { React } from 'react';
import { map, values } from '@laufire/utils/collection';

const Header = (context) => {
	const { config: { header }} = context;

	return <tr>
		{values(map(header, (heading) =>
			<th key={ heading }>{heading}
			</th>))}
	</tr>;
};

export default Header;
