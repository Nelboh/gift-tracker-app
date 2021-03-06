const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_GIFT":
			return {
				...state,
				gifts: [...state.gifts, action.payload],
			};

		case "ADD_FRIEND":
			return{
				...state,
				friends: [...state.friends, action.payload],
				friendsLoaded: true
			}
			
		case "REMOVE_GIFT":
			return {
				...state,
				gifts: state.gifts.filter((gift) => gift.id !== action.payload),
			};

		case "EDIT_GIFT":
			return {
				...state,
				gifts: state.gifts.map((gift) => {
					if (gift.id !== action.payload.id) {
						return gift;
					} else {
						return {
							...gift,
							...action.payload,
						};
					}
				}),
			};
			// console.log(action.payload);

			case "EDIT_FRIEND":
				return {
					...state,
					friends: state.friends.map((friend) => {
						if (friend.id !== action.payload.id) {
							return friend;
						} else {
							return {
								...friend,
								...action.payload,
							};
						}
					}),
				};

		default:
			return state;
	}
};

export default reducer;
