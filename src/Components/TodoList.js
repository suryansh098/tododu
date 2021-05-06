import React from 'react';
import {TodoItem} from './TodoItem';
import PropTypes from 'prop-types'

export const TodoList = (props) => {
    // console.log(props.todos);
    return (
        <div className="container my-2">
            <h3 className="text-center my-2">TODO LIST</h3>
            {
                (props.todos.length === 0) ?
                <p>No items to display</p> :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    );
}

TodoList.propTypes = {
    todos: PropTypes.array
}
