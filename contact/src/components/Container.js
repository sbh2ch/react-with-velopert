/**
 * Created by sonbyeonghwa on 2017. 8. 26..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color/open-color';
import {media} from '../lib/style-utils';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto;
    padding: 1rem;
    background: black;
    
    ${media.mobile`width: 100%`}
`;

const Container = ({visible, children}) => visible ?
    (
        <Wrapper>

        </Wrapper>
    ) : null;

export default Container;