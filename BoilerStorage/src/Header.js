import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '20px',
  },
  logo: {
    color: '#CEB888',
    fontSize: '1.5em',
  },
  nav: {
    '& a': {
      margin: '0 10px',
      color: '#CEB888',
      textDecoration: 'none',
    },
  },
});

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>BoilerStorage</div>
      <nav className={classes.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
