import React, { Fragment, useContext } from 'react';
import BudgetItem from './BudgetItem';
import BudgetContext from '../../context/budget/budgetContext';

const Budgets = () => {
    const budgetContext = useContext(BudgetContext);

    const { budgets } = budgetContext;

    return (
        <Fragment>
            {budgets.map(budget => (
                <BudgetItem key={ budget.id } budget={ budget }/>
            ))}
        </Fragment>
    )
};

export default Budgets;