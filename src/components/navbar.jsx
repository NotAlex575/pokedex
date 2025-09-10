import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-4 mb-5">
        <div className="container-fluid">
          <h2 className="mb-0">Questa è la navbar del Pokedex!</h2>
          <div className="ms-auto">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row gap-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                >
                  Homepage
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/pokedex"
                  className={({ isActive }) =>
                    isActive ? "nav-link fw-bold" : "nav-link"
                  }
                >
                Pokedex
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar