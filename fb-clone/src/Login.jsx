import { Button } from '@mui/material';
import React from 'react';
import { users } from './data';
import { auth, provider } from './firebase';
import './Login.css';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch(err => alert(err.message));
  };

  console.log('🟠', auth);
  console.log('🟢', provider);

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src={users[5].profilePic} alt='icon' />
        <img src={users[5].bgImage} alt='logo' />
      </div>

      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
