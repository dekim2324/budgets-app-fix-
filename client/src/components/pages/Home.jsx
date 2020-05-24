import React from 'react';
import Budgets from '../budgets/Budgets';
import BudgetForm from '../budgets/BudgetForm';
import BudgetFilter from '../budgets/BudgetFilter';

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <BudgetForm />
            </div>
            <div>
                <BudgetFilter />
                <Budgets />
            </div>
        </div>
    )
}

export default Home;