import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import axios, * as others from 'axios';
import { useNavigate } from 'react-router-dom';


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

  let navigate = useNavigate();

  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const url = `http://localhost:8080/login`
      const res = await axios.post(url, { email: username, password: password })
      console.log(res)
      if (res.data.success === true) {
        await navigate(`../home/success/${username}`, {replace: true});
      } else {
        alert("Invalid credentials")
        await navigate(`../login`, {replace: true});
        console.log("Error to log in");
      }
    } catch (err) {
      console.log(err);
      console.log("ererwerwerwer")
    }
  };

  return (
    <main className={classes.main}>
      <div className={classes.hero}>
        <h1>Welcome to BoilerStorage</h1>
      </div>
      <form className={classes.form} onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Log In</button>
      </form>
    </main>
  );
}

export default Main;
