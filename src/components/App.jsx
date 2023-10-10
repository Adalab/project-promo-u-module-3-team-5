//imports dependencias, imagenes, componentes, stylos

import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

import '../styles/App.scss';
import { useState } from 'react';


function App() {
  //funciones, variables, handles,

  const [title, setTitle] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [desc, setDesc] = useState("");
  const [autor, setAutor] = useState("");
  const [job, setJob] = useState("");

  const [error, setError] = useState("");

  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;

    /* const regex = /[a-zA-ZáéíóúüÁÉÍÓÚÜ]/;

    if(inputValue === "" || regex.test(inputValue)){
      setLastLetter(inputValue);
    } */

    if(inputId==='title'){
      setTitle(inputValue);
    }else if(inputId==='slogan'){
      setSlogan(inputValue);
    }else if(inputId==='repo'){
      setRepo(inputValue);
    }else if(inputId==='demo'){
    setDemo(inputValue);
    }else if(inputId==='technologies'){
    setTechnologies(inputValue);
    }else if(inputId==='desc'){
      setDesc(inputValue);
    }else if(inputId==='autor'){
      setAutor(inputValue);
    }else if(inputId==='job'){
      setJob(inputValue);
    }
  }

  const handleClickCreateCard = () => {
    console.log("handleClickCreateCard, holi");
    
    // inputValue === ""? console.log("rellena los datos") : console.log("todo ok!")
    if (title === "" ||
        slogan === "" ||
        repo === "" ||
        demo === "" ||
        technologies === "" ||
        desc === "" ||
        autor === "" ||
        job === "") {
          console.log("Te falta rellenar")
          setError("Te has dejado campos por rellenar")
    } else {
      setError("")
    }
  }

  const handleForm = (ev) => {
    ev.preventDefault();
  }
  
  //html
  return (
    <div className="container">
      <header className="header">
        <p className="text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="image" src={cover} alt="" />

          <section className="autor">
            <section className="info-project">
              <p className="subtitle">Personal Project Card</p>
              <hr className="line" />

              <h2 className="title">{title ||'Elegant Workspace'}</h2>
              <p className="slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {desc || `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!`}
              </p>
              <div className="techDemoRepo">
                <section className="technologies">
                  <p className="text">{technologies || 'React JS, MongoDB'}</p>
                </section>
                <section className="demo repo">
                  <a href={demo || ""}><i className="fa-solid fa-globe"></i></a>
                  <a href={repo || ""}><i className="fa-brands fa-github"></i></a>
                </section>
              </div>

            </section>
            
            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{job || 'Full Stack Developer'}</p>
              <p className="name">{autor || 'Emmelie Björklund'} </p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="line" />
          </section>

          <form onSubmit={handleForm}>
            <fieldset className="project">
              <input
                className="input"
                type="text"
                placeholder="Nombre del proyecto"
                name="title"
                id="title"
                value={title}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                value={slogan}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                name="repo"
                id="repo"
                placeholder="https://github.com/mariaPepina/repositorioPepino"
                value={repo}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="https://maria-pepina.com "
                name="demo"
                id="demo"
                value={demo}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
                value={technologies}
                onChange={handleInput}
                required
              />
              <textarea
                className="textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                value={desc}
                onChange={handleInput}
                required
              ></textarea>
            </fieldset>
          

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre"
              name="autor"
              id="autor"
              value={autor}
              onChange={handleInput}
              required
            />
            <input
              className="input"
              type="text"
              placeholder="Trabajo"
              name="job"
              id="job"
              value={job}
              onChange={handleInput}
              required
            />
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>
          </form>

          <section className="card">
            <span className="">{error ||'La tarjeta ha sido creada:'}  </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
