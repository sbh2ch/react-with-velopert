import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoReset.css';


export default class TodoReset extends Component {
    static defaultProps = {
        onReset: () => console.warn('onRemove not defined!')
    };

    static propTypes = {
        onReset: PropTypes.func
    };

    render() {
        const {onReset} = this.props;

        return (
            <button className="TodoReset" onClick={onReset}>reset</button>
        )
    }
}