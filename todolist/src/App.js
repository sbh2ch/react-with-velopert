import React, {Component} from 'react';
import shortId from 'shortid';
import TodoInsert from './components/TodoInsert';
import TodoItemList from './components/TodoItemList';
import TodoReset from './components/TodoReset';
import './App.css';

function createItem(name) {
    return {
        id: shortId.generate(),
        name,
        finished: false
    }
}

const defaultTodos = [
    'react #1',
    'react #2',
    'react #3',
    'react #4'
].map((value, key) => createItem(value));

class App extends Component {
    state = {
        todoItems: defaultTodos
    };

    constructor(props) {
        super(props);
        const todos = localStorage.getItem('todos');
        if (todos) {
            this.state = {
                todoItems: JSON.parse(todos)
            };
        }
    };

    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('todos', JSON.stringify(this.state.todoItems));
    }

    handleInsert = (name) => {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                createItem(name)
            ]
        });
    };

    handleRemove = (id) => {
        const {todoItems} = this.state;
        const index = todoItems.findIndex(item => item.id === id);

        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                ...todoItems.slice(index + 1, todoItems.length)
            ]
        });
    };

    handleToggle = (id) => {
        const {todoItems} = this.state;
        const index = todoItems.findIndex(item => item.id === id);
        const item = todoItems[index];

        this.setState({
            todoItems: [
                ...todoItems.slice(0, index),
                {
                    ...item,
                    finished: !item.finished
                },
                ...todoItems.slice(index + 1, todoItems.length)
            ]
        });
    };

    handleReset = () => {
        this.setState({
            todoItems: defaultTodos
        });
    };

    render() {
        const {handleInsert, handleRemove, handleToggle, handleReset} = this;

        return (
            <div className="App">
                <h1>TODO LIST</h1>
                <TodoReset onReset={handleReset}/>
                <TodoInsert onInsert={handleInsert}/>
                <TodoItemList items={this.state.todoItems} onRemove={handleRemove} onToggle={handleToggle}/>
            </div>
        );
    }
}

export default App;
