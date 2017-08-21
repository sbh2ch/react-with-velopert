import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

    render() {
        const {name} = this.props;

        return (
            <li>
                {name}
            </li>
        )
    }
}