import React from 'react';
import Budgets from '../budgets/Budgets';
import BudgetForm from '../budgets/BudgetForm';

const Home = () => {
    return (
        <div className="grid-2">
            <div>
                <BudgetForm />
            </div>
            <div>
                <Budgets />
            </div>
        </div>
    )
}

export default Home;