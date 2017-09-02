/**
 * Created by sonbyeonghwa on 2017. 8. 26..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color/open-color';

const Wrapper = styled.div`
    height: 5rem;
    background: ${oc.gray[9]};
    border-bottom: 1px solid ${oc.gray[8]};
    
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    
    display: flex;
    align-items: center; //세로정렬
    justify-content: center; //가로정렬
`;

const Header = () => {
    return (
        <Wrapper>
            Contact
        </Wrapper>
    )
};

export default Header;