import React from "react";

const Todo = (props) => {
    return(<>
        <li className="todo" key={props.id}>{props.text}</li>
        </>
    )
}

export default Todo;