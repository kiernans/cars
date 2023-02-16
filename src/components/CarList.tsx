import { useSelector, useDispatch } from 'react-redux';
import { Car } from '../../types';
import { RootState, removeCar } from '../store';

const CarList = () => {
	const dispatch = useDispatch();
	const { cars, name } = useSelector(
		({ form, cars: { data, searchTerm } }: RootState) => {
			const filteredCars = data.filter((car) =>
				car.name.toLowerCase().includes(searchTerm.toLowerCase())
			);

			return {
				cars: filteredCars,
				name: form.name,
			};
		}
	);

	const handleCarDelete = (car: Car) => {
		if (car.id) {
			dispatch(removeCar(car.id));
		}
	};

	const renderedCars = cars.map((car) => {
		// Decide if car should be bold
		// state.form.name
		const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

		return (
			<div key={car.id} className={`panel ${bold && 'bold'}`}>
				<p>
					{car.name} - ${car.cost}
				</p>
				<button
					onClick={() => handleCarDelete(car)}
					className='button is-danger'
				>
					Delete
				</button>
			</div>
		);
	});

	return (
		<div className='car-list'>
			{renderedCars}
			<hr />
		</div>
	);
};

export default CarList;
