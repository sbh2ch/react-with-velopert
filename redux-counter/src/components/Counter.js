/**
 * Created by sonbyeonghwa on 2017. 9. 9..
 */
import React from 'react';
import './Counter.css';
import PropTypes from 'prop-types';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={() => onIncrement(index)}
            onContextMenu={(e) => {
                e.preventDefault(); //우클릭시 나오는 옵션 제거
                onDecrement(index);
            }} // 우클릭
            onDoubleClick={() => onSetColor(index)}
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
    index: PropTypes.number,
    number: PropTypes.number,
    color: PropTypes.string,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    index: 0,
    onIncrement: () => console.warn('onIncrement not defined!'),
    onDecrement: () => console.warn('onDecrement not defined!'),
    onSetColor: () => console.warn('onSetColor not defined!')
};

export default Counter;
