import React, { useReducer } from 'react';
import BudgetContext from './budgetContext';
import budgetReducer from './budgetReducer';
import {
    ADD_BUDGET, DELETE_BUDGET,
    SET_CURRENT, CLEAR_CURRENT,
    UPDATE_BUDGET, 
    FILTER_BUDGET, CLEAR_FILTER
} from '../types';
const uuid = require('uuid'); 

const BudgetState = props => {
    const initalState = {
        budgets: [
            {
                id: 1,
                income: 4500,
                expenses: { rent: 1000, car: 200, subscriptions: 37, groceries: 180, play: 77 },
                investments: { t401k: 300, hsa: 100, roth: 500, robinhood: 50 }
            },
            {
                id: 2,
                income: 2100,
                expenses: { rent: 500, car: 300, subscriptions: 40, groceries: 200, play: 100 },
                investments: { t401k: 10, hsa: 10, roth: 100, robinhood: 50 }
            },
            {
                id: 3,
                income: 11000,
                expenses: { rent: 1600, car: 400, subscriptions: 57, groceries: 240, play: 400 },
                investments: { t401k: 1000, hsa: 100, roth: 500, robinhood: 1000 }
            }
        ]
    };

    const [state, dispatch] = useReducer(budgetReducer, initalState);

    // Add Budget
    const addBudget = (budget) => {
        budget.id = uuid.v4();
        dispatch({ type: ADD_BUDGET, payload: budget });
    }

    // Delete Budget

    // Set Current Budget

    // Clear Current Budget

    // Update Budget

    // Filter Budgets

    // Clear Filter

    return (
        <BudgetContext.Provider
        value={{
            budgets: state.budgets
        }}>
            { props.children }
        </BudgetContext.Provider>
    )
};

export default BudgetState;