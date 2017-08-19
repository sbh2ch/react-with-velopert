import React, {Component} from 'react';
import MyComponent from './MyComponent';
import Container from './Container';

class App extends Component {

    render() {
        return (
            // babel은 여러 브라우저에서 ES6코드를 사용할 수 있게 도와주는 도구임. 이미 create-react-app에 적용되어있음.
            // webpack또한 적용되어있음.
            // JSX code start : javascript의 확장 문법
            <div>
                <Container title="welcome"/>
                <MyComponent name="bh" favoriteNumber={1}/>
            </div>
            // JSX code end
        );
    }
}

export default App;
