import React, {Component} from 'react';
import Header from 'components/Header';
import Layout from 'components/Layout';
import WriteMemo from './WriteMemo';
import MemoListContainer from './MemoListContainer';

import * as memoActions from 'modules/memo';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class App extends Component {
    componentDidMount() {
        const {MemoActions} = this.props;

        MemoActions.getInitialMemo();
    }

    render() {
        return (
            <Layout>
                <Header>Memo</Header>
                <Layout.Main>
                    <WriteMemo/>
                    <MemoListContainer/>
                </Layout.Main>
            </Layout>
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        MemoActions: bindActionCreators(memoActions, dispatch)
    })
)(App);