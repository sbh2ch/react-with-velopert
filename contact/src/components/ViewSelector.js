/**
 * Created by sonbyeonghwa on 2017. 9. 2..
 */
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';

const Wrapper = styled.div`
    height: 4rem;
    background: white;
    width: 100%;
    display: flex;

    /* 하단 핑크색 바 위치 설정을 위해 설정 
       bottom, left 값 설정할때 이 Wrapper 에 의존 */
    position: relative;
`;

const StyledItem = styled.div`
    /* 레이아웃 */
    height: 100%;

    /* 형제 엘리먼트들과 동일한 사이즈로 설정 */
    flex: 1; 

    /* 가운데 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* 색상 */
    color: ${props => props.active ? oc.gray[9] : oc.gray[6]};

    /* 기타 */
    font-size: 1.5rem;
    cursor: pointer;

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${oc.gray[0]};
    }
`;

StyledItem.propTypes = {
    active: PropTypes.bool
};

const Bar = styled.div`
    /* 레이아웃 */
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 50%;

    /* 색상 */
    background: ${oc.pink[6]};

    transform: ${props => props.right ? 'translateX(100%)' : 'none'}; 
    transition: all .25s ease-in; //시작할땐 느리게했다가 점점 빨라지는 효과 
`;

Bar.propTyles = {
    right: PropTypes.bool
};

const Item = ({children, selected, name, onSelect}) => (
    <StyledItem onClick={() => onSelect(name)} active={name === selected}>{children}</StyledItem>
);

Item.propTypes = {
    selected: PropTypes.string,
    name: PropTypes.string,
    onSelect: PropTypes.func
};

const ViewSelector = ({selected, onSelect}) => (
    <Wrapper>
        <Item name="favorite" selected={selected} onSelect={onSelect}><StarIcon/></Item>
        <Item name="list" selected={selected} onSelect={onSelect}><PeopleIcon/></Item>
        <Bar right={selected === 'list'}/>
    </Wrapper>
);

ViewSelector.propTypes = {
    onSelect: PropTypes.func,
    selected: PropTypes.string
};

export default ViewSelector;