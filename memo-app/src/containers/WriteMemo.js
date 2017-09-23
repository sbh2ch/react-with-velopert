import React, {Component} from 'react';
import {InputPlaceholder, WhiteBox} from 'components/WriteMemo';
import {InputSet, SaveButton} from 'components/Shared';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as uiActions from 'modules/ui';
import * as memoActions from 'modules/memo';
import enhanceWithClickOutside from 'react-click-outside';

class WriteMemo extends Component {
    handleFocus = () => {
        const {focused, UIActions} = this.props;

        if (!focused) {
            UIActions.focusInput();
        }
    };

    handleClickOutside = () => {
        const {focused, UIActions} = this.props;

        if (focused) {
            UIActions.blurInput();
        }
    };

    handleChange = (e) => {
        const {UIActions} = this.props;
        const {name, value} = e.target;

        UIActions.changeInput({name, value});
    };

    handleCreate = async () => {
        const {title, body, MemoActions, UIActions} = this.props;
        try {
            await MemoActions.createMemo({
                title, body
            });

            UIActions.resetInput();
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        const {handleFocus, handleChange, handleCreate} = this;
        const {focused, title, body} = this.props;

        return focused ? (
            <WhiteBox>
                <InputSet
                    onChange={handleChange}
                />
                <SaveButton onClick={handleCreate}/>
            </WhiteBox>
        ) : (
            <WhiteBox onClick={handleFocus}>
                <InputPlaceholder/>
            </WhiteBox>
        );
        // return (
        //     <WhiteBox>
        //         {/*<InputPlaceholder/>*/}
        //         <InputSet/>
        //         <SaveButton/>
        //     </WhiteBox>
        // );
    }
}

export default connect(
    (state) => ({
        focused: state.ui.getIn(['write', 'focused']),
        title: state.ui.getIn(['write', 'title']),
        body: state.ui.getIn(['write', 'body'])
    }),
    (dispatch) => ({
        UIActions: bindActionCreators(uiActions, dispatch),
        MemoActions: bindActionCreators(memoActions, dispatch)
    })
)(enhanceWithClickOutside(WriteMemo));