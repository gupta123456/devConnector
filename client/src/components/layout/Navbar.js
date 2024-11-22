import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout, darkMode, toggleDarkMode }) => {

  const linkStyle = { color: darkMode ? '#fff' : '#000' };
  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles" style={linkStyle}>Developers</Link>
      </li>
      <li>
        <Link to="/posts" style={linkStyle}>Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm" style={linkStyle}>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm" style={linkStyle}>Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles" style={linkStyle}>Developers</Link>
      </li>
      <li>
        <Link to="/register" style={linkStyle}>Register</Link>
      </li>
      <li>
        <Link to="/login" style={linkStyle}>Login</Link>
      </li>
    </ul>
  );

  return (
    <nav
      className={`navbar ${darkMode ? 'bg-dark' : 'bg-light'}`}
      style={{ color: darkMode ? '#fff' : '#000' }}
    >
      <h1>
        <Link to="/" style={{ color: darkMode ? '#fff' : '#000' }}>
          <i className="fas fa-code" /> DevConnector
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      <button
        onClick={toggleDarkMode}
        className="btn btn-dark-mode-toggle"
        style={{
          marginLeft: 'auto',
          padding: '0.5em',
          borderRadius: '4px',
        }}
      >
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
