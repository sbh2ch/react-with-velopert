import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Container visible={true}></Container>
                <Container visible={true}></Container>
            </div>
        );
    }
}

export default App;