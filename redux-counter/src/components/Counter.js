/**
 * Created by sonbyeonghwa on 2017. 9. 9..
 */
import React from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={onIncrement}
            onContextMenu={(e) => {
                e.preventDefault(); //우클릭시 나오는 옵션 제거
                onDecrement();
            }} // 우클릭
            onDoubleClick={onSetColor}
            style={{
                backgroundColor: color
            }}
        >
            {number}
        </div>
    )
};

Counter.propTypes = {
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    number: PropTypes.number,
    color: PropTypes.string,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined!'),
    onDecrement: () => console.warn('onDecrement not defined!'),
    onSetColor: () => console.warn('onSetColor not defined!')
};

export default Counter;
