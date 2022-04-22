import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css'

const Menu = ({active}) => {
    return (
        <div className="div">
        <div className={active ? 'menu active' : 'menu'}>
            <div className="menu__content">
                <div className="menu__header">Меню</div>
                <ul>
                    <li>
                        <NavLink to="/main-page"> Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to="../create-page"> Создать</NavLink>
                    </li>
                </ul>
            </div>
            <div className="blur"/>
        </div>
        </div>
    );
};

export default Menu;