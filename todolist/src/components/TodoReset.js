import React, {Component} from 'react';
import PropTypes from 'prop-types';


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
            <button onClick={onReset}>reset</button>
        )
    }
}