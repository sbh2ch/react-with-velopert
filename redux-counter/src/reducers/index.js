/**
 * Created by sonbyeonghwa on 2017. 9. 9..
 */
import {combineReducers} from 'redux';
import number from './number';
import color from './color';

const reducers = combineReducers({
    numberData: number,
    colorData: color
});


// const initialState = {
//     color: 'black',
//     number: 0
// };
// const counter = (state = initialState, action) => {
//     switch (action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number + 1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number - 1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             };
//         default:
//             return state;
//     }
// };

export default reducers;