import React from 'react'

export default function TodoCard(props) {
    const {children, handleDeleteTodo, index, handleEditTodo} = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionscContainer'>
            <div className='firstIcon'>

                <button className='editButton' onClick={()=>{
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
            <button className='deleteButton' onClick={()=>{
                handleDeleteTodo(index)
            }}>
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    </li>
  )
}
