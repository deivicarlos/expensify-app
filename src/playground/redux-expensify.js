import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0
    } = {}) =>
    ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount
        }
    });

//EDIT_EXPENSE
const editExpense = ({ id } = {}) => ({
    type: 'EDIT_EXPENSE',
    id
});

//REMOVE_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE



const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'EDIT_EXPENSE':
            return state.filter(({ id }) => id !== action.id );
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(
    addExpense({
        description: 'February Rent',
        note: 'First payment of new place',
        amount: 10000
    })
);

store.dispatch(
    addExpense({
        description: 'March Rent',
        note: 'First payment of new place',
        amount: 10000
    })
);

store.dispatch(editExpense({
    id: expenseOne.expense.id
}));

const demoState = {
    expenses: [{
        id: '4353579',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54900,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
};


