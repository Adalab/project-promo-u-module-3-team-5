//imports dependencias, imagenes, componentes, stylos

import cover from '../images/cover.jpeg';
import user from '../images/user.jpeg';

import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //funciones, variables, handles,

  const dataObject = {
    title: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
  };
  const [data, setData] = useState(dataObject);

  const [error, setError] = useState('');

  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;

    setData({ ...data, [inputId]: inputValue });
  };

  const handleClickCreateCard = () => {
    if (
      data.title === '' ||
      data.slogan === '' ||
      data.repo === '' ||
      data.demo === '' ||
      data.technologies === '' ||
      data.desc === '' ||
      data.autor === '' ||
      data.job === ''
    ) {
      setError('Te has dejado campos por rellenar');
    } else {
      setError('');
    }
  };

  const handleForm = (ev) => {
    ev.preventDefault();
  };

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

              <h2 className="title">{data.title || 'Elegant Workspace'}</h2>
              <p className="slogan">{data.slogan || 'Diseños Exclusivos'}</p>
              <p className="desc">
                {data.desc ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!`}
              </p>
              <div className="techDemoRepo">
                <section className="technologies">
                  <p className="text">{data.technologies || 'React JS, MongoDB'}</p>
                </section>
                <section className="demo repo">
                  <a href={data.demo || ''}>
                    <i className="fa-solid fa-globe"></i>
                  </a>
                  <a href={data.repo || ''}>
                    <i className="fa-brands fa-github"></i>
                  </a>
                </section>
              </div>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{data.job || 'Full Stack Developer'}</p>
              <p className="name">{data.autor || 'Emmelie Björklund'} </p>
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
                value={data.title}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                value={data.slogan}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                name="repo"
                id="repo"
                placeholder="https://github.com/mariaPepina/repositorioPepino"
                value={data.repo}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="https://maria-pepina.com"
                name="demo"
                id="demo"
                value={data.demo}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Tecnologías"
                name="technologies"
                id="technologies"
                value={data.technologies}
                onChange={handleInput}
                required
              />
              <textarea
                className="textarea"
                type="text"
                placeholder="Descripción"
                name="desc"
                id="desc"
                value={data.desc}
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
                value={data.autor}
                onChange={handleInput}
                required
              />
              <input
                className="input"
                type="text"
                placeholder="Trabajo"
                name="job"
                id="job"
                value={data.job}
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
            <span className="">{error || 'La tarjeta ha sido creada:'} </span>
            <a
              href="https://adalab.es/"
              className=""
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              https://adalab.es/
              {/* {' '} */}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
