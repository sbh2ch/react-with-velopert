/**
 * Created by sonbyeonghwa on 2017. 9. 23..
 */
import {combineReducers} from 'redux';
import {penderReducer} from 'redux-pender';
import memo from './memo';
import ui from './ui';

export default combineReducers({
    memo,
    ui,
    pender: penderReducer
});