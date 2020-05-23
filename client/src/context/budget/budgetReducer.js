import {
    ADD_BUDGET, DELETE_BUDGET,
    SET_CURRENT, CLEAR_CURRENT,
    UPDATE_BUDGET, 
    FILTER_BUDGET, CLEAR_FILTER
} from '../types';

export default (state, action) => {
    switch(action.type) {
        case ADD_BUDGET:
            return {
                ...state,
                budgets: [...state.budgets, action.payload]
            }
        default: 
            return state;
    }
};