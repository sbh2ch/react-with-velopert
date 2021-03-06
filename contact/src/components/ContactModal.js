/**
 * Created by sonbyeonghwa on 2017. 9. 2..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import Input from './Input';
import RemoveIcon from 'react-icons/lib/md/remove-circle';

const ThumbnailWrapper = styled.div`
    /* 레이아웃 */
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;

    /* 색상 */
    background: white;
`;

const Form = styled.div`
    /* 레이아웃 */
    padding: 1rem;

    /* 색상 */
    background: ${oc.gray[0]};
`;

const ButtonsWrapper = styled.div`
    /* 레이아웃 */
    display: flex;
`;

const Button = styled.div`
    /* 레이아웃 */
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;
    
    /* 기타 */
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all .3s;

    /* 색상 */
    color: white;
    background: ${props => oc[props.color][7]};

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${props => oc[props.color][6]};
    }

    /* 클릭 될 때 */
    &:active {
        background: ${props => oc[props.color][8]};
    }
`;

Button.propTypes = {
    color: PropTypes.string
};

const RemoveButton = styled.div`
    /* 레이아웃 */
    position: absolute;
    right: 1rem;
    top: 1rem;

    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    cursor: pointer;
    font-size: 2rem;

    /* 마우스 커서 위에 있을 때 */
    &:hover {
        color: ${oc.red[6]};
    }
    /* 마우스 커서 클릭 시 */
    &:active {
        color: ${oc.red[7]}
    }

    ${props => !props.visible && 'display: none;'}
`

RemoveButton.propTypes = {
    visible: PropTypes.bool
};

class ContactModal extends Component {

    static propTypes = {
        visible: PropTypes.bool,
        // 모달의 모드
        mode: PropTypes.oneOf(['create', 'modify']),
        // 모달에 들어갈 데이터 값
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        onHide: PropTypes.func,
        onAction: PropTypes.func, // 추가 혹은 수정
        onRemove: PropTypes.func, // 나중에 구현할 삭제
        onChange: PropTypes.func
    };

    handleChange = (e) => {
        const {onChange} = this.props;

        onChange({name: e.target.name, value: e.target.value});
    };

    render() {
        const {
            visible,
            onHide,
            color,
            name,
            mode,
            phone,
            onAction,
            onRemove
        } = this.props;

        const {handleChange} = this;

        return (
            <Modal visible={visible} onHide={onHide}>
                <RemoveButton
                    visible={mode === 'modify'}
                    onClick={onRemove}
                ><RemoveIcon/></RemoveButton>
                <ThumbnailWrapper>
                    <Thumbnail color={color} size={'8rem'}/>
                </ThumbnailWrapper>
                <Form>
                    <Input name='name' placeholder='name' value={name} onChange={handleChange}/>
                    <Input name='phone' placeholder='phone' value={phone} onChange={handleChange}/>
                </Form>
                <ButtonsWrapper>
                    <Button color='pink' onClick={() => onAction()}>{mode === 'create' ? 'create' : 'modify'}</Button>
                    <Button color='gray' onClick={() => onHide()}>cancel</Button>
                </ButtonsWrapper>
            </Modal>
        );
    }
}

export default ContactModal;