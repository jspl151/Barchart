import { React } from 'react';
import Header from './Header';
import Body from './Body';

const Table = (context) => <table className="applyBorder">
	<thead>
		<Header { ...context }/>
	</thead>
	<Body { ...context }/>
</table>;

export default Table;
