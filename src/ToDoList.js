import React from 'react';
import ToDo from './ToDo'

export default function ToDoList(props) {
    console.log("props",props);
    return (
        <div>

            {props.todofuhanx.map(tx => {return <ToDo todo={tx} key={tx.id} changeTodo ={props.toggleTodo}/>})}
        </div>

 

    )

}