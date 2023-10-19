import logoNuestro from "../../images/logo-nuestro.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landing">
        <Link to="/create-projects" className="btn">Crear Proyectos Cohete <img src={logoNuestro} alt="cohete" className="logo"></img> </Link>
    </div>
  )
}
export default Landing