import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

import { FaBars } from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import Logo from '../images/weed.svg';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={Logo} alt="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            {click ? <AiOutlineCloseCircle/> : <FaBars/> }
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Inicio
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/sobre'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sobre <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/aulas'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Aulas
            </Link>
          </li>
          
          
          <li className='nav-item'>
            <Link
              to='/contato'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contato
            </Link>
          </li>
          <li>
            <a
              target="_blank" 
              rel="noopener noreferrer"
              href='https://sistemas.unifesp.br/acad/proec-siex/index.php?page=INS&acao=1&code=20258'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Inscreva-se
            </a>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
