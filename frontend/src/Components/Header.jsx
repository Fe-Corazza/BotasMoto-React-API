import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#000' }}>
          Botas MotoPeças
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto"> {/* me-auto para alinhar à esquerda */}
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ fontSize: '1.2rem' }}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Clientes" style={{ fontSize: '1.2rem' }}>Cliente</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Fornecedor" style={{ fontSize: '1.2rem' }}>Fornecedor</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Produtos" style={{ fontSize: '1.2rem' }}>Produtos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Vendas" style={{ fontSize: '1.2rem' }}>Vendas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
