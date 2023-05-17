import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

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

function Main() {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <main className={classes.main}>
      <div className={classes.hero}>
        <h1>Welcome to BoilerStorage</h1>
       
      </div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Log In</button>
      </form>
    </main>
  );
}

export default Main;
