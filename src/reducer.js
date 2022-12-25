import SCH_LISTS from './constants';

const initialState = {
schData: [],
detailData: [],
isLoading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SCH_LISTS.LOAD:
            return {
                ...state,
                isLoading: true,
            };
        case SCH_LISTS.LOAD_SUCCESS:
            return {
                ...state,
                schData: action.schData,
                isLoading: false,
            };
        case SCH_LISTS.DETAIL_SUCCESS:
            return {
                ...state,
                detailData: action.detailData,
            }
        default:
            return state;
    }
};

export default reducer;