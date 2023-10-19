import logoNuestro from "../../images/logo-nuestro.png";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div>
        <Link to="/create-projects">Crear Proyectos Cohete <img src={logoNuestro} alt="cohete"></img> </Link>
    </div>
  )
}
export default Landing