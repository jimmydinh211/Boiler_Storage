import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: '20px',
  },
  text: {
    color: '#CEB888',
    fontSize: '1em',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <p className={classes.text}>© 2023 BoilerStorage</p>
    </footer>
  );
}

export default Footer;
