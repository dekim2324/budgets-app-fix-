import React from 'react'

const BudgetItem = ({ budget }) => {
    const { 
        id, income, 
        expenses: { rent, car, subscription, groceries, play},
        investments: { t401k, hsa, roth, robinhood }
    } = budget;

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
                { income }
            </h3>
        </div>
    )
}

export default BudgetItem;