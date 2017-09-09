import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {Map, List} from 'immutable';

var data = Map({
    a: 1,
    b: 2,
    c: Map({
        d: 3,
        e: 4,
        f: 5
    })
});

console.log(data.get('b'));
var newData = data.set('b', 6);
console.log(data.get('b'));
console.log(newData.get('b'));

console.log(data.toJS());
console.log(data.get('a'));

//깊숙한 값 설정
data.setIn(['c', 'd'], 4);

//값 여러개 설정할땐 mergeIn 이 있음
// 근디 setIn 무한콜백하는게 더 성능 좋음

const list = List([1,2,3,4,5,6,7]);


class App extends Component {
    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;
