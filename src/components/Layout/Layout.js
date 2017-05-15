import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Layout.scss';
import Footer from '../Footer';
import TopBar from '../TopBar';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <TopBar />
        <div className={s.childContainer}>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Layout);
