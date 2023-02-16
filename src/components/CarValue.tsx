import { useSelector } from 'react-redux';
import { RootState } from '../store';

const CarValue = () => {
	const totalCost = useSelector(({ cars: { data, searchTerm } }: RootState) => {
		const filteredCars = data
			.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
			.reduce((acc, car) => acc + car.cost, 0);

		return filteredCars;
	});

	return <div className='car-value'>Total Cost: ${totalCost}</div>;
};

export default CarValue;
