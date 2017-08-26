import React from 'react';

export default class MyComponents2 extends React.Component {
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

    handleClick = () => {
        const {lastName, firstName, names} = this.state;
        if (lastName === '') {
            this.lastNameInput.focus();
            return;
        } else if (firstName === '') {
            this.firstNameInput.focus();
            return;
        }
        this.setState({
            names: [
                ...names,
                `${lastName}, ${firstName}`
            ],
            lastName: '',
            firstName: ''
        });
        this.lastNameInput.focus();
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleClick();
        }
    };


    render() {
        const {lastName, firstName, names} = this.state;
        const {handleChange, handleClick, handleKeyPress} = this;
        return (
            <div>
                <h1>welcome2</h1>
                <p>
                    <input
                        onChange={handleChange}
                        name="lastName"
                        placeholder="lastName"
                        value={lastName}
                        onKeyPress={handleKeyPress}
                        ref={ref => this.lastNameInput = ref}
                    />
                    <input
                        onChange={handleChange}
                        name="firstName"
                        placeholder="firstName"
                        value={firstName}
                        onKeyPress={handleKeyPress}
                        ref={ref => this.firstNameInput = ref}
                    />
                    <button onClick={handleClick}>click</button>
                </p>
                <div>{names.map((value, key) => <h3 key={key}>{key} {value}</h3>)}</div>
            </div>
        )
    }
}