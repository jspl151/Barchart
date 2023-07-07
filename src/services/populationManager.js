import { pick, reduce } from '@laufire/utils/collection';

const percent = 100;
const fixDecimal = 2;

const getDifference = (population) =>
	population.estimate2022 - population.estimate2011;

const getPercentage = (population, difference) =>
	difference / population.estimate2011 * percent;

const getPopulationList = (population) => {
	const difference = getDifference(population);

	return {
		...population,
		difference: difference.toFixed(fixDecimal),
		percentage: getPercentage(population, difference).toFixed(fixDecimal),
	};
};

const getState = (populations, minMaxValues) =>
	populations.find((state) =>
		Number(state.estimate2022) === minMaxValues).state;

const getMinMax = (populations) => {
	// eslint-disable-next-line id-match
	const estimate2022 = pick(populations, 'estimate2022');
	const maxValue = Math.max(...pick(populations, 'estimate2022'));
	const minValue = Math.min(...pick(populations, 'estimate2022'));

	return {
		maxValue2022: maxValue,
		minValue2022: minValue,
		maxValueState2022: getState(populations, maxValue),
		minValueState2022: getState(populations, minValue),
		totalPopulation2022: reduce(
			estimate2022, (acc, cur) => acc + Number(cur), 0
		),

	};
};

const populationManager = (context) => {
	const { data } = context;
	const populationList = data.map(getPopulationList);
	const minMaxValues = getMinMax(data);

	return populationList;
};

export default populationManager;
