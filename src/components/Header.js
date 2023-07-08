import { React } from 'react';
import { map, values } from '@laufire/utils/collection';

const Header = ({ config: { header }}) => <tr>
	{ values(map(header, (heading) =>
		<th key={ heading } className="tableBorder">
			{ heading }</th>))}
</tr>;

export default Header;
