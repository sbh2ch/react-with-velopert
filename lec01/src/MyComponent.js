/**
 * Created by sonbyeonghwa on 2017. 8. 19..
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {

    state = {
        lastName: '',
        firstName: '',
        names: []
    };

    

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
    };

    handleClick = (e) => {
        const {lastName, firstName, names} = this.state;
        this.setState({
            lastName: '',
            firstName: '',
            names: [...names, `${lastName}, ${firstName}`] //template literal
//            names: [...names, lastName + ' ' + firstName]
        });
        this.lastNameInput.focus();
    };

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    };

    //Dom을 건드려면 ref를 사용한다.


    render() {
        const {handleChange, handleClick, handleKeyPress} = this;
        const {lastName, firstName, names} = this.state;
        return (
            <div>
                <input
                    name="lastName"
                    placeholder="lastName"
                    onChange={handleChange}
                    value={lastName}
                    ref={ref=>this.lastNameInput=ref}
                />
                <input
                    name="firstName"
                    placeholder="firstName"
                    onChange={handleChange}
                    value={firstName}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={handleClick}>등록</button>
                <div>{names.map((name, idx) => <h3 key={idx}>{idx} {name}</h3>)}</div>
                {/*<div>{JSON.stringify(this.state.names)}</div>*/}
            </div>
        );
    }
}
/*
 MyComponent.defaultProps = {
 job: "developer"
 }
 */