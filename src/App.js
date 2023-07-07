import { React } from 'react';
import './App.scss';
import Table from './components/Table';
import populationManager from './services/populationManager';
import populationData from './components/data/PopulationData';

const App = (context) => <div className="App">
	<Table
		{ ...{ ...context, data: populationManager({ ...context,
			data: populationData }) } }
	/>

</div>;

export default App;
