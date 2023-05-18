import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';

const useStyles = createUseStyles({
  main: {
    backgroundColor: '#000',
    color: '#CEB888',
    padding: '50px 20px',
    height: 'calc(100vh - 80px)',
  },
  hero: {
    textAlign: 'center',
    '& h1': {
      fontSize: '2.5em',
      margin: '20px 0',
    },
    '& p': {
      fontSize: '1.2em',
      maxWidth: '800px',
      margin: '0 auto',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
    '& input': {
      margin: '10px 0',
      padding: '10px',
      fontSize: '1em',
      backgroundColor: '#fff',
      border: 'none',
    },
    '& button': {
      margin: '10px 0',
      padding: '10px',
      fontSize: '1em',
      backgroundColor: '##CEB888',
      color: '#000',
      border: 'none',
      cursor: 'pointer',
    },
  },
});



function Home() {
  const classes = useStyles();
  const { authenticated, name } = useParams();

  return (
    <div>
      <Header />
      <main className={classes.main}>
        <div className={classes.hero}>
          {(authenticated === "success") ? (<h1>Welcome to BoilerStorage, {name}!</h1>) : (<h1>Welcome to BoilerStorage</h1>)}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;