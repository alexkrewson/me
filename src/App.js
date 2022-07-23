import TodoList from './TodoList'
import '../src/sassystyle.scss';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import me from './me2.jpg';


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
        {/* <div className="header"></div> */}
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
            I am seeking a path to combine my years of controls and hydraulic engineering experience with my nascent skillset as a front end developer. After completing an online full-stack boot-camp (The Odin Project), I am eager to put my skills to use in the real world and to gain experience by working with other programmers.

          </div>
          <div className="contentSections" id="projects">
            <h1>Projects</h1>
            {/* Ad inventore distinctio aut quibusdam eveniet rem dignissimos doloribus qui voluptatum asperiores in corrupti libero vel quia optio. Ut optio asperiores est perspiciatis dignissimos ad architecto dolor. Ad incidunt aspernatur et ullam dolores eum labore dicta. */}
            <div className='project-row'>
              <p>Weather App</p>
              <a href="https://alexkrewson.github.io/weather/dist/index.html" className='button' target="_blank">live preview</a>
              <a href="https://github.com/alexkrewson/portfolio/tree/main/weather" className='button' target="_blank">view code</a>
            </div>

            <div className='project-row'>
              <p>Todo List</p>
              <a href="https://alexkrewson.github.io/todolist/dist/index.html" className='button' target="_blank">live preview</a>
              <a href="https://github.com/alexkrewson/portfolio/tree/main/todo" className='button' target="_blank">view code</a>
            </div>
            <div className='project-row'>
              <p>Weather App</p>
              <a href="https://arcane-inlet-56598.herokuapp.com/" className='button' target="_blank">live preview</a>
              <a href="https://github.com/alexkrewson/portfolio/tree/main/fb" className='button' target="_blank">view code</a>
            </div>

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
