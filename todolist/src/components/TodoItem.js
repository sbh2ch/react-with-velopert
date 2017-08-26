import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

export default class TodoItem extends Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.string,
        finished: PropTypes.bool,
        onToggle: PropTypes.func,
        onRemove: PropTypes.func
    };

    static defaultProps = {
        name: '기본 항목',
        id: '',
        finished: false,
        onToggle: () => console.warn('onToggle not defined!'),
        onRemove: () => console.warn('onRemove not defined!')
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.finished !== this.props.finished;
    };

    render() {
        const {
            name,
            id,
            finished,
            onToggle,
            onRemove
        } = this.props;
        console.log('rendering', name);

        const style = {
            cursor: 'pointer',
            textDecoration: finished ? 'line-through' : 'none'
        };

        return (
            <li
                style={style}
                onClick={() => onToggle(id)}
                onDoubleClick={() => onRemove(id)}
                className="TodoItem"
            >
                {name}
            </li>
        )
    }
}