import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import BudgetContext from '../../context/budget/budgetContext';

const BudgetItem = ({ budget }) => {
    const budgetContext = useContext(BudgetContext);
    const { deleteBudget } = budgetContext;

    const { 
        id, income, 
        expenses: { rent, car, subscriptions, groceries, play},
        investments: { t401k, hsa, roth, robinhood }
    } = budget;

    const onDelete = () => {
        deleteBudget(id);
    };

    return (
        <div className='card bg-light'>
            <h3 className="text-primary text-left">
               Income: { income }
            </h3>
            <ul className="list"> <strong>Expenses:</strong>
                {<li> rent: { rent }</li>}
                {<li> car: { car }</li>}
                {<li> subscriptions: { subscriptions }</li>}
                {<li> groceries: { groceries }</li>}
                {<li> play: { play }</li>}
            </ul>
            <ul className="list"> <strong>Investments:</strong>
                {<li> 401k: { t401k }</li>}
                {<li> hsa: { hsa }</li>}
                {<li> roth: { roth }</li>}
                {<li> robinhood: { robinhood }</li>}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
};

BudgetItem.propTypes = {
    budget: PropTypes.object.isRequired
}

export default BudgetItem;