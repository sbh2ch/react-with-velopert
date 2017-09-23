/**
 * Created by sonbyeonghwa on 2017. 9. 23..
 */
import axios from 'axios';

export const createMemo = ({title, body}) => axios.post('/memo', {title, body});
export const getInitialMemo = () => axios.get('/memo/?_sort=id&_order=DESC&_limit=20');
export const getRecentMemo = (cursor) => axios.get(`/memo/?id_gte=${cursor+1}&_sort=id&_order=DESC&`);
