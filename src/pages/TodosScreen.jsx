import React from 'react'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
export const TodosScreen = () => {
  const { tasks } = useContext(AuthContext)
//  const tareas = JSON.stringify(tasks)
  
  return(
    <>
    {tasks.map((task)=>(
      <div key={task.id} className="row">
        <p>ID: { task.id}</p>
        <p>Titulo: { task.title}</p>
      </div>
    ))}
    </>

  )
    

     
  
  
}
