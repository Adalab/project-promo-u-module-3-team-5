import '../../styles/layouts/Form.scss';
import PropTypes from "prop-types";

function Form({ data, handleClickInput, handleClickCreateCard, cardSectionIsVisible, cardUrl, error }) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    handleClickInput(inputValue, inputId);
  };

  return (
    <section className="form">
      <h2 className="title">Información</h2>

      <section className="ask-info">
        <p className="subtitle">Cuéntanos sobre el proyecto</p>
        <hr className="line" />
      </section>

      <form
        onSubmit={(ev) => {
          ev.preventDefault();
        }}
      >
        <fieldset className="project">
          <label className="label">Nombre del proyecto</label>
          <input
            className="input"
            type="text"
            placeholder="Nombre del proyecto: Mi proyecto"
            name="name"
            id="name"
            value={data.name}
            onChange={handleInput}
            required
          />
          <label className="label">Slogan</label>
          <input
            className="input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan: Mi slogan"
            value={data.slogan}
            onChange={handleInput}
            required
          />
          <label className="label">Nombre Repositorio</label>
          <input
            className="input"
            type="text"
            name="repo"
            id="repo"
            placeholder="Repo: www.github.com/user/repo"
            value={data.repo}
            onChange={handleInput}
            required
          />
          <label className="label">Nombre de tu Web</label>
          <input
            className="input"
            type="text"
            placeholder="Web: www.maria-pepina.com"
            name="demo"
            id="demo"
            value={data.demo}
            onChange={handleInput}
            required
          />
          <label className="label">Tecnologías empleadas</label>
          <input
            className="input"
            type="text"
            placeholder="Tecnologías: React JS, MongoDB"
            name="technologies"
            id="technologies"
            value={data.technologies}
            onChange={handleInput}
            required
          />
          <label className="label">Descripción</label>
          <textarea
            className="textarea"
            type="text"
            placeholder="Descripción"
            name="desc"
            id="desc"
            value={data.desc}
            onChange={handleInput}
            maxLength="128"
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
            placeholder="Nombre de la autora"
            name="autor"
            id="autor"
            value={data.autor}
            onChange={handleInput}
            required
          />
          <input
            className="input"
            type="text"
            placeholder="Profesión"
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

      <section className={`card ${cardSectionIsVisible ? '' : 'hidden'}`}>
        <span className={error === '' ? '' : 'red'}>
          {error || 'La tarjeta ha sido creada:'}{' '}
        </span>
        <a
          href={cardUrl}
          className={error !== '' ? 'hidden' : ''}
          target="_blank"
          rel="noreferrer"
        >
          {cardUrl}
        </a>
      </section>
    </section>
  );
}
Form.propTypes = {
  data: PropTypes.object.isRequired,
  handleClickInput: PropTypes.func.isRequired,
  handleClickCreateCard: PropTypes.func.isRequired,
  cardSectionIsVisible: PropTypes.bool.isRequired,
  cardUrl: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
export default Form;
