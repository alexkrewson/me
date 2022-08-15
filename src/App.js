import LoadJSON from './LoadJSON'

import '../src/sassystyle.scss';
import React, { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import me from './me2.jpg';
import resumePDF from './Resume.pdf';


const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  const [githubMetricsOutput, setGithubMetricsOutput] = useState({})

  useEffect(() => {

    async function fetchData() {
      const githubMetricsOutput2 = await LoadJSON()
      setGithubMetricsOutput(githubMetricsOutput2)
    }

    fetchData()
  }, [])



  return (
    <>

      <div className="gridContainer">
        {/* <div className="header"></div> */}
        <div className="sidebar">
          <img src={me} alt="" />
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#ghMetrics">github metrics</a>
          <a href="#resume">resume</a>
        </div>
        <div className="content">
          <div className="contentSections" id="about">
            <h1>About Me</h1>
            I am seeking a path to combine my years of controls and hydraulic engineering experience with my nascent skillset as a front end developer. After completing an online full-stack boot-camp (The Odin Project), I am eager to put my skills to use in the real world and to gain experience by working with other programmers.

          </div>
          <div className="contentSections" id="projects">
            <h1>Projects</h1>
            <div className='project-row'>
              <h2>Weather App</h2>
              <p>Current weather and relevant gif using OpenWeatherMap API</p>
              <div className="row-buttons">
                <a href="https://alexkrewson.github.io/weather" className='button' target="_blank">live preview</a>
                <a href="https://github.com/alexkrewson/portfolio/tree/main/weather" className='button' target="_blank">view code</a>
              </div>
            </div>

            <div className='project-row'>
              <h2>Todo List</h2>
              <p>Task list and project organizer with tabs made of CSS trapezoids</p>
              <div className="row-buttons">
                <a href="https://alexkrewson.github.io/todolist/dist/index.html" className='button' target="_blank">live preview</a>
                <a href="https://github.com/alexkrewson/portfolio/tree/main/todo" className='button' target="_blank">view code</a>
              </div>
            </div>
            <div className='project-row'>
              <h2>Facebook Clone</h2>
              <p>Clone of Facebook built with a Ruby backend and deployed on Heroku</p>
              <div className="row-buttons">
                <a href="https://arcane-inlet-56598.herokuapp.com/" className='button' target="_blank">live preview</a>
                <a href="https://github.com/alexkrewson/portfolio/tree/main/fb" className='button' target="_blank">view code</a>
              </div>
            </div>

          </div>
          <div className="contentSections" id="ghMetrics">
            <h1>Github Metrics</h1>
            <p>Technologies and the numbers of times I've used them in projects</p>
            <div className="ghMetricsLanguageContainer">
              <div className="ghMetricsLanguageSubContainer">
                <h3>Ruby</h3>
                <p>{githubMetricsOutput.Ruby}</p>
              </div>
              <div className="ghMetricsLanguageSubContainer">
                <h3>JavaScript</h3>
                <p>{githubMetricsOutput.JavaScript}</p>
              </div>
              <div className="ghMetricsLanguageSubContainer">
                <h3>HTML</h3>
                <p>{githubMetricsOutput.HTML}</p>
              </div>
              <div className="ghMetricsLanguageSubContainer">
                <h3>CSS</h3>
                <p>{githubMetricsOutput.CSS}</p>
              </div>
              <div className="ghMetricsLanguageSubContainer">
                <h3>Sass</h3>
                <p>{githubMetricsOutput.Sass}</p>
              </div>
            </div>
              <p id="footnote">{githubMetricsOutput.message}</p>
          </div>
          <div className="contentSections" id="resume">
            <h1>Resume</h1>
            <iframe src={resumePDF} height="100%" width="90%"></iframe>
          </div>



        </div>
      </div>

    </>
  )
}


export default App;
