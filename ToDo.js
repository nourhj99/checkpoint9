import React from 'react';

const ToDo = ({list}) => {
  
  
    const handleOnClick=(e) => {
        console.log(e.target.style)
        e.target.style.textDecoration = "line-through"
    }
    const ToDoLists = list.length ? (
        list.map(index => {
            return (
                <div>
                    <li key={index.id} style={{marginLeft: 100}} onClick={handleOnClick} >
                        {index.content}
                    </li>
                </div>
            )
        })

    ) : (<div> <p>no list</p></div>);

    return(
        <div>
             {ToDoLists}
        </div>
       
    )



}
export default ToDo;