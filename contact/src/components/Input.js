/**
 * Created by sonbyeonghwa on 2017. 9. 2..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Input = styled.input`
    /* 레이아웃 */
    width: 100%;
    padding: 0.5rem;

    /* 색상 */
    border: 1px solid ${oc.gray[2]};

    /* 기타 */
    font-size: 1.5rem;
    line-height: 2rem;
    transition: all .25s;

    /* 입력중일때 */
    &:focus {
        outline: none; //파란색 기본 포커싱 빛을 none
        border: 1px solid ${oc.pink[3]}; 
        color: ${oc.pink[6]};
    }

    /* 컴포넌트 사이 간격 */ //input + input << 인풋간의 간격에만 margin-top 적용
    & + & {
        margin-top: 1rem;
    }
`;

Input.propTypes = { // input 에서 필요한 props들임.
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;