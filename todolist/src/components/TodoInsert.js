import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoInsert.css';

export default class TodoInsert extends Component {
    static propTypes = {
        onInsert: PropTypes.func
    };

    static defaultProps = {
        onInsert: () => console.warn('onInsert not defined!')
    };

    state = {
        input: ''
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    handleClick = () => {
        this.props.onInsert(this.state.input);
        this.setState({
            input: ''
        });
    };

    handleKeypress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };


    render() {
        const {input} = this.state;
        const {handleChange, handleClick, handleKeypress} = this;

        return (
            <div className="TodoInsert">
                <input
                    value={input}
                    onChange={handleChange}
                    onKeyPress={handleKeypress}
                />
                <button onClick={handleClick}>add</button>
            </div>
        )
    }
}