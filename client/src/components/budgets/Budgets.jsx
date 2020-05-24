import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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
            <TransitionGroup >
                {filtered !== null 
                    ? filtered.map(budget => (
                    <CSSTransition key={ budget.id } timeout={500} classNames="item">
                        <BudgetItem budget={ budget }/>
                    </CSSTransition>
                    ))
                    :  budgets.map(budget => (
                    <CSSTransition key={ budget.id } timeout={500} classNames="item">
                        <BudgetItem budget={ budget }/>
                    </CSSTransition>
                    ))}
            </TransitionGroup>
        </Fragment>
    )
};

export default Budgets;