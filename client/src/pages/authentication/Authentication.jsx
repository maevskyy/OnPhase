import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { authDataState } from '../../assets/states';
import { authUser } from '../../store/user';
import mac from '../../assets/images/V2.png';

import AuthHeader from './AuthHeader';
import AuthLogin from './AuthLogin';
import AuthRegister from './AuthRegister';
import AuthSubmit from './AuthSubmit';

const Authentication = ({setDeleteRefresh}) => {
  const dispatch = useDispatch()
  const [signIn, setSignIn] = useState(false);
  const [authData, setAuthData] = useState(authDataState);

  const inputsHandler = (event) => {
    setAuthData({ ...authData, [event.target.name]: event.target.value });
  };

  //! fix this func
   const authSubmitHandler = async (e) => {
    e.preventDefault();
    const isEmptyRegiser =
      authData.email == '' ||
      authData.firstName == '' ||
      authData.lastName == '' ||
      authData.password == '' ||
      authData.confirmPassword == '';
    const isEmptyLogin = authData.email == '' || authData.password == '';
    if (signIn) {
      if (isEmptyLogin) {
        return console.log('Not valid Login');
      }
      await axios.post('/user/signIn', {
        email: authData.email,
        password: authData.password,
      });
      const response = await axios.get('/user/fetchUser');
      setDeleteRefresh(prev => !prev)
      return dispatch(authUser(response.data));
    }
  
    if (isEmptyRegiser) {
      return console.log('Not valid Register');
    }
    await axios.post('/user/signUp', authData);
      const response = await axios.get('/user/fetchUser');
      setDeleteRefresh(prev => !prev)
      return dispatch(authUser(response.data));
  };

  return (
    <main className="flex w-full h-full overflow-hidden">
      <section className="w-2/5 flex items-center justify-center">
        <div className="w-3/5 flex flex-col gap-[1.5em]">
          <AuthHeader
            signIn={signIn}
            setSignIn={setSignIn}
          />
          <article className="flex flex-col gap-3">
            {signIn ? (
              <AuthLogin
                authData={authData}
                inputsHandler={inputsHandler}
              />
            ) : (
              <AuthRegister
                authData={authData}
                inputsHandler={inputsHandler}
              />
            )}
          </article>
          <AuthSubmit
            authSubmitHandler={authSubmitHandler}
            signIn={signIn}
            authData={authData}
          />
        </div>
      </section>
      <section className="w-3/5">
        <img
          src={mac}
          alt="logo"
        />
      </section>
    </main>
  );
};

export default Authentication;
