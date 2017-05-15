import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>© TestBharat</span>
          <span className={s.spacer}>·</span>
          <Link className={s.link} to="/">Home</Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
