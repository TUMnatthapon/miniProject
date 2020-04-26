const initialShoesArray = 0;
export const countCartReducer = (data = initialShoesArray, action) => {
    switch (action.type) {
        case 'GET_COUNT':
            return action.paylaod;
        default: return data;
    }
}