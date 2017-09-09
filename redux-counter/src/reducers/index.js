/**
 * Created by sonbyeonghwa on 2017. 9. 9..
 */
import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
};

const counter = (state = initialState, action) => {
    const {counters} = state;
    switch (action.type) {
        case types.CREATE:
            return {
                ...state,
                counters: [
                    ...counters,
                    {
                        number: 0,
                        color: action.color
                    }
                ]
            };
        case types.REMOVE:
            return {
                ...state,
                counters: counters.slice(0, counters.length - 1)
            };
        case types.INCREMENT:
            return {
                ...state,
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        case types.DECREMENT:
            return {
                ...state,
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        case types.SET_COLOR:
            return {
                ...state,
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            return state;


    }
};

export default counter;