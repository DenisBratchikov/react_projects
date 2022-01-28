import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useRef } from 'react/cjs/react.development';
import AuthContext from '../../store/auth-context';

import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const sibmitHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordRef.current.value;

    fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCCgPMH0i2jOOBGQ4Tun6q6KTLERrpbIIg',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  };
  return (
    <form className={classes.form} onSubmit={sibmitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          ref={newPasswordRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
