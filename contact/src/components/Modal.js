/**
 * Created by sonbyeonghwa on 2017. 9. 2..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import {media, transition} from '../lib/style-utils';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    
    z-index: 10;
    
    width: ${props => props.width};
    
    ${media.mobile`
        width: calc(100% - 2rem);
    `}
    
    .modal-enter {
        animation: ${transition.slideDown} .5s ease-in-out;
        animation-fill-mode: forwards; // 끝난 후에 스타일이 어떻게 유지되야할까에 대한 옵션 forwards 시 그대로 유지한다.
    }
    
    .modal-leave {
        animation: ${transition.slideUp} .5s ease-in-out;
        animation-fill-mode: forwards;
    }
`;

Wrapper.propTypes = {
    width: PropTypes.string
};

const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0,0,0,0.3);
`;

class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        onHide: PropTypes.func,
        width: PropTypes.string
    };

    static defaultProps = {
        width: '400px'
    };

    // 컴포넌트 외부를 클릭하면 실행되는 메소드
    handleClickOutside = (e) => {
        const {visible, onHide} = this.props;

        if (!visible) return null; // 이미 visible 이 false 라면 아무것도 안함
        onHide();
    };

    // Esc 키가 클릭되면 onHide 를 실행한다
    handleKeyUp = (e) => {
        const {onHide} = this.props;

        if (e.keyCode === 27) {
            onHide();
        }
    };

    componentDidUpdate(prevProps, prevState) {
        // visible 값이 변할 때:
        if (prevProps.visible !== this.props.visible) {

            if (this.props.visible) {
                // 방금 보여졌다면
                // body 에 keyUp 이벤트 등록해서 Esc 키를 감지한다.
                document.body.addEventListener('keyup', this.handleKeyUp);
            } else {
                // 방금 사라졌다면
                document.body.removeEventListener('keyup', this.handleKeyUp);
            }
        }
    }


    render() {
        // 레퍼런스 생성
        const {visible, children, width} = this.props;

        return (
            <div>
                <Wrapper width={width}>
                    <CSSTransitionGroup
                        transitionName="modal"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        {
                            /* visible 이 참일때만 ModalBox 보여줌 */
                            visible && (<ModalBox>{children}</ModalBox>)
                        }
                    </CSSTransitionGroup>
                </Wrapper>
            </div>
        );
    }
}
export default onClickOutside(Modal);