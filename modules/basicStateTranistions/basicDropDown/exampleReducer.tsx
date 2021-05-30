export const selectedItemsInitState = {
	hlavniChod: [""],
	priloha: [""],
	desert: [""],
};

export enum FoodActions {
	addHlavniChod,
	addDesert,
	addPriloha,
}

export const selectedItemsReducer = (state, action) => {
	switch (action.type) {
	case FoodActions.addHlavniChod:
		if (state.hlavniChod.includes(action.payload)) {
			return {
				...state,
				hlavniChod: state.hlavniChod.filter(
					(item) => item !== action.payload
				),
			};
		} else
			return {
				...state,
				hlavniChod: state.hlavniChod.concat(action.payload),
			};
	}

	switch (action.type) {
	case FoodActions.addPriloha:
		if (state.priloha.includes(action.payload)) {
			return {
				...state,
				priloha: state.priloha.filter(
					(item) => item !== action.payload
				),
			};
		} else
			return {
				...state,
				priloha: state.priloha.concat(action.payload),
			};
	}

	switch (action.type) {
	case FoodActions.addDesert:
		if (state.desert.includes(action.payload)) {
			return {
				...state,
				desert: state.desert.filter(
					(item) => item !== action.payload
				),
			};
		} else
			return {
				...state,
				desert: state.desert.concat(action.payload),
			};
	}
};
