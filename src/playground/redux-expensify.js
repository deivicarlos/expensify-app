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

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'EDIT_EXPENSE',
    id
});


//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
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
        case 'SET_TEXT_FILTER':
            console.log(state);
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
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

// const expenseOne = store.dispatch(
//     addExpense({
//         description: 'February Rent',
//         note: 'First payment of new place',
//         amount: 10000
//     })
// );

// const expenseTwo = store.dispatch(
//     addExpense({
//         description: 'March Rent',
//         note: 'First payment of new place',
//         amount: 10000
//     })
// );

// store.dispatch(removeExpense({
//     id: expenseOne.expense.id
// }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

store.dispatch(setStartDate(125));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));


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

const user = {
    name: 'Jen',
    age: 24
};

console.log({ ...user });
