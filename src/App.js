import { React } from 'react';
import './App.scss';
import Table from './components/Table';
import populationManager from './services/populationManager';
import populationData from './data/PopulationData';
import BarChart from './components/BarChart';

const App = (context) => {
	const data = populationManager({ ...context, data: populationData	});

	return <div className="App">
		<Table { ...{ ...context, data } }/>
		<BarChart { ...{ ...context, data } }/>
	</div>;
};

export default App;
