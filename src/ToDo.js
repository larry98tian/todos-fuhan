import React from 'react'

export default function ToDo(props) {

    function  handleCheckboxClick() {
        props.changeTodo(props.todo.id)
    }

    return (
        <div>
            
            <label>
                <input type="checkbox" checked = {props.todo.complete} onChange={handleCheckboxClick} />    
                {props.todo.name}
            </label>
        </div>
    )
}