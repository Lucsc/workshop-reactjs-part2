import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
          <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
          </ul>
      </div>
    );
  }
  

export default Navigation;