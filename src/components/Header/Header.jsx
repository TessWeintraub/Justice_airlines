import "./Header.css";
import "../../styles.css";
import {useState} from "react";
import "../Menu/Menu.css"
import Menu from '../Menu/Menu'
import {useNavigate} from "react-router-dom"

export default function Header() {
    const [menuActive, setMenuActive] = useState(false)
    const navigate= useNavigate();
  return (
    <header className="header">
      <nav className="nav wrapper">
          <div className="nav__container" onClick={()=>{ navigate('../main-page')}}>
              <img
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Airplane_silhouette_white.svg/1024px-Airplane_silhouette_white.svg.png"
              />
              <h1>Авиабилеты</h1>
          </div>
          <div className="nav__container" onClick={()=>{setMenuActive(!menuActive)}}>
              <svg viewBox="0 0 100 80" width="40" height="40">
                  <rect width="100" height="14" rx="6"></rect>
                  <rect y="30" width="100" height="14" rx="6"></rect>
                  <rect y="60" width="100" height="14" rx="6"></rect>
              </svg>
              <Menu active={menuActive}/>
          </div>
      </nav>
    </header>
  );
}
