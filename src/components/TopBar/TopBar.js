import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TopBar.scss';
import Link from '../Link';
import logo from '../../assets/logo-black.png';


class Navigation extends React.Component {
  render() {
    return (
      <div className={s.root} role="navigation">
        <div className={s.logo}>
          <Link to="/">
            <img className={s.brand} src={logo} alt="React" />
          </Link>
        </div>
        <div className={s.navLinks}>
          <Link className={s.link} to="/about">About</Link>
          <Link className={s.link} to="/contact">Contact</Link>
          <span className={s.spacer}> | </span>
          <Link className={s.link} to="/login">Log in</Link>
          <span className={s.spacer}>or</span>
          <Link className={cx(s.link, s.highlight)} to="/register">Sign up</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Navigation);
