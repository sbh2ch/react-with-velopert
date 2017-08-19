/**
 * Created by sonbyeonghwa on 2017. 8. 19..
 */
import React from 'react';

const Container = ({title, children}) => {
//    const {title, children} = props;

    return (
        <div>
            <h1>{title}</h1>
            <div>{children}</div>
        </div>
    );
};

export default Container;