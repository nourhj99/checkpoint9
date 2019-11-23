import React from 'react';

const ToDo = ({list}) => {
  
    const ToDoLists = list.length ? (
        list.map(index => {
            return (
                <div>
                    <li key={index.id} style={{marginLeft: 100}}  >
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