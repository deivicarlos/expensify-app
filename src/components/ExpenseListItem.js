import React from 'react';

const ExpenseListItem = ({description, amount, createdAt}) => (
    <div>
        <p>Description: {description} Amount: ${amount} Created: {createdAt}</p>
    </div>
);

export default ExpenseListItem;