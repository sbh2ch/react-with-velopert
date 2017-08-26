/**
 * Created by sonbyeonghwa on 2017. 8. 26..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color/open-color';

const Wrapper = styled.div`
    height: 5rem;
    background: ${oc.cyan[6]};
    border-bottom: 1px solid ${oc.cyan[8]};
    
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
            주소록
        </Wrapper>
    )
};

export default Header;