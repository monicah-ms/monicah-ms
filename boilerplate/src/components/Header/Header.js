/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.brandContainer}>
          <Link className={s.brand} to="/">
            <img src={require('./logo-small.png')} width="60" height="60" alt="MARKUB_Logo" />
            <span className={s.brandTxt}>MARKUB</span>
          </Link>
        </div>
        <Navigation className={s.nav} />
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
