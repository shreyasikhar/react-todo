import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaTrash} from 'react-icons/fa'

const Todos = ({todos, markComplete, markCross}) => {
    return (
        <ListGroup className="mt-5 mb-5 items">
            {todos.map((todo) => {
                return(
                    <ListGroupItem 
                    key={todo.id} 
                    className={todo.status === "completed" ? "crossed" : ""}
                    onDoubleClick={() => markCross(todo.id)}
                    >
                        {todo.todoString}
                        <span 
                        className="float-right"
                        onClick={() => markComplete(todo.id)}
                        >
                            <FaTrash /></span>
                    </ListGroupItem>
                )
            })}
        </ListGroup>
    )
}

export default Todos