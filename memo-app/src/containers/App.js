import React, {Component} from 'react';
import Header from '../components/Header';
import Layout from 'components/Layout';

class App extends Component {
    render() {
        return (
            <Layout>
                <Header>Memo</Header>
                <Layout.Main>
                    Hello MemoApp!
                </Layout.Main>
            </Layout>
        );
    }
}

export default App;