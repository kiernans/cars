import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Car } from '../../../types';

type CarsState = {
	searchTerm: string;
	data: Car[];
};

const initialState: CarsState = {
	searchTerm: '',
	data: [],
};

const carsSlice = createSlice({
	name: 'cars',
	initialState,
	reducers: {
		changeSearchTerm(state, action: PayloadAction<string>) {
			state.searchTerm = action.payload;
		},
		addCar(state, action: PayloadAction<Car>) {
			// Assumption:
			// action.payload === { name: '', cost: 140} (the car)
			state.data.push({
				name: action.payload.name,
				cost: action.payload.cost,
				id: nanoid(),
			});
		},
		removeCar(state, action: PayloadAction<string>) {
			// Assumption:
			// action.payload === the id of car to remove
			const updated = state.data.filter((car) => {
				return car.id !== action.payload;
			});
			state.data = updated;
		},
	},
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
