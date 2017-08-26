import React, {Component} from 'react';
import classNames from 'classnames/bind';
import style from './App.scss';

const cx = classNames.bind(style);

class App extends Component {

    render() {
        return (
            <div>
                <div className={cx('card', 'one')}>one</div>
                <div className={cx('card', 'two')}>two</div>
                <div className={cx('card', 'three')}>three</div>
                <div className={cx('card', 'four')}>four</div>
            </div>
        );
    }
}

export default App;
