import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';

import axios, * as others from 'axios';


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

function SignUpMain() {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSignUp = async(event) => {
    event.preventDefault();
    try {
      const url = "http://localhost:8080/signup"
      const res = await axios.post(url, { email: username, password: password , firstName, lastName})
      console.log(res)
      console.log("Running....")
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
      <form className={classes.form} onSubmit={handleSignUp}>
        <input type="text" placeholder="Email" value={username} onChange={handleUsernameChange} />
        <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
        <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
        <button type="submit">Sign Up</button>
      </form>
    </main>
  );
}

export default SignUpMain;
