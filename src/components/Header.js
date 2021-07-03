import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import TopPage from '../pages/TopPage'
import SecondPage from '../pages/SecondPage'

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <h3>GlobalState</h3>
        <Link to="/">
          Top
        </Link>
                <Link to="/secondpage">
        Second
        </Link>
      </Toolbar>
    </AppBar>
  );
}
export default Header