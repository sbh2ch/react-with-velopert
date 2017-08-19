/**
 * Created by sonbyeonghwa on 2017. 8. 19..
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class MyComponent extends Component {
    static defaultProps = {
        job: 'developer'
    }; // ES7 문법

    static propTypes = {
        name: PropTypes.string,
        job: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
    };

    render() {
        const {name, job, favoriteNumber} = this.props;
        // const name = this.props.name;
        // const job = this.props.job;
        // 둘 다 동일한 코드임
        return (
            <div>
                <h2>hello, my name is {name}</h2>
                <h2>my job is {job}</h2>
                <h2>my favorite number is {favoriteNumber}</h2>
            </div>
        );
    }
}
/*
 MyComponent.defaultProps = {
 job: "developer"
 }
 */