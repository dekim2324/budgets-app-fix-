import React, { Fragment, useContext } from 'react';
import BudgetItem from './BudgetItem';
import BudgetContext from '../../context/budget/budgetContext';


const Budgets = () => {
    const budgetContext = useContext(BudgetContext);

    const { budgets, filtered } = budgetContext;

    if(budgets.length === 0) {
        return <h2>Please add a budget</h2>
    }

    return (
        <Fragment>
            {filtered !== null 
                ? filtered.map(budget => (
                <BudgetItem  key={ budget.id } budget={ budget }/>
                ))
                :  budgets.map(budget => (
                <BudgetItem key={ budget.id } budget={ budget }/>
                ))}
        </Fragment>
    )
};

export default Budgets;