import React from 'react';
import './App.scss';
import Todo from "./Todo";

const App = () => {

    const todos = [
        {id: 1, text: 'hi'},
        {id: 2, text: 'hello'},
        {id: 3, text: 'todos here'},
        {id: 4, text: 'dccdcdc'},
        {id: 5, text: 'cecwcwe'},
        {id: 6, text: '123uvdhjwd'}
    ];

    return (
        <div className="App">
            <header className="App-header">
                <h1>just work, please)</h1>
                <div className="newclass">todolist</div>
            </header>
            <ul className="todos">
                {todos.map(todo => (<Todo id = {todo.id} text={todo.text}/>))}
            </ul>
        </div>

    );
};

export default App;
