import TodoList from './TodoList'
import '../src/sassystyle.scss';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import me from './me.jpg';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    // console.log('working?')
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      console.log('setTodos is working')
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }


  return (
    <>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length}</div> */}
      <div className="gridContainer">
        <div className="sidebar">
            <img src={me} alt="" />
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#ghMetrics">github metrics</a>
            <a href="#resume">resume</a>
          {/* <div className="sidebarFixed">
          </div> */}
        </div>
        <div className="content">
          <div className="contentSections" id="about">
            <h1>About Me</h1>
            Please hire me I want your monies! Please hire me I want your monies! Please hire me I want your monies! Please hire me I want your monies! Please hire me I want your monies! Please hire me I want your monies! Please hire me I want your monies! Please hire me I want your monies!
            
          </div>
          <div className="contentSections" id="projects">
            <h1>Projects</h1>
            Ad inventore distinctio aut quibusdam eveniet rem dignissimos doloribus qui voluptatum asperiores in corrupti libero vel quia optio. Ut optio asperiores est perspiciatis dignissimos ad architecto dolor. Ad incidunt aspernatur et ullam dolores eum labore dicta.
          </div>
          <div className="contentSections" id="ghMetrics">
            <h1>Github Metrics</h1>
            Ut odio illum et itaque autem id officiis ipsa est culpa magni. A sint eius est dolorem consequatur ut harum iure et incidunt sequi non error debitis ut iure illo in sunt ipsam.
          </div>
          <div className="contentSections" id="resume">
            <h1>Resume</h1>
            Quo tempora nostrum et debitis mollitia eos aliquam doloribus ut amet eius. Ut amet laboriosam sit soluta facilis et reprehenderit animi vel velit galisum quo libero odit ea minima ipsum. Et mollitia iure sit iusto similique qui molestias est veniam sed quae repellat.
          </div>



        </div>
      </div>

    </>
  )
}


export default App;
