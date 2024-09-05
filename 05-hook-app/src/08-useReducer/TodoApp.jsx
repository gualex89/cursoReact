import React, { useContext, useEffect, useReducer } from 'react'
import { TodoAdd, TodoList } from '../08-useReducer'
import { useTodos } from '../hooks'






export const TodoApp = ( ) => {

  const {todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos()


  

  return (
    <>
      <h1>TodoApp ({todosCount}) <small>Pendientes: {pendingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">

          <TodoList 
            todos = {todos} 
            onDeleteTodo = {handleDeleteTodo} 
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          
          <TodoAdd onNewTodo= {handleNewTodo}/>
        </div>

      </div>
    
    </>
  )
}
