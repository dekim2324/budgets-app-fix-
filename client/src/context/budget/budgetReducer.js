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
            };
        case DELETE_BUDGET:
            return {
                ...state,
                budgets: state.budgets.filter(budget => budget.id !== action.payload)
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        default: 
            return state;
    }
};