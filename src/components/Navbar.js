import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return (
    <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          DISCOS CBS
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#index">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#novedades">NOVEDADES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#artistas">ARTISTAS</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                NOSOTROS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item first-dropdown" href="#nosotros">¿QUIÉNES SOMOS?</a></li>
                <li><a className="dropdown-item second-dropdown" href="#contacto">CONTACTO</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.discogs.com/label/307009-Discos-CBS-SAICF" target="_blank">CATÁLOGO</a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  </header>
  );
}

export default Navbar;