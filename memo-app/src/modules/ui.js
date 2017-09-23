/**
 * Created by sonbyeonghwa on 2017. 9. 23..
 */
import {handleActions} from 'redux-actions';
import {Map} from 'immutable';

const initialState = Map({});

export default handleActions({}, initialState);