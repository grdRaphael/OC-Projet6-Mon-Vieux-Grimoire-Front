import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import * as PropTypes from 'prop-types';
import styles from './Header.module.css';
import Logo from '../../images/Logo.svg';

function Header({ user, setUser }) {
  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  return (
    <header className={styles.Header}>
      <div className="container">
        <img src={Logo} alt="Mon Vieux Grimoire" />
        <ul>
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><NavLink to="/Ajouter">Ajouter un livre</NavLink></li>
          <li>{!user ? <NavLink to="/Connexion">Se connecter</NavLink> : <span tabIndex={0} role="button" onKeyUp={disconnect} onClick={disconnect}>Se déconnecter</span> }</li>
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
export default Header;
