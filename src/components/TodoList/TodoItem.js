import React from 'react';

const TodoItem = (props) => {
    console.log(props)
    return(
        <div>
            {props.tarea}
        </div>
    )

}

export default TodoItem;