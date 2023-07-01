import React from 'react';

const AuthRegister = ({ inputsHandler, authData }) => {
 return (
  <>
   <input
    type="text"
    onChange={inputsHandler}
    name="email"
    value={authData.email}
    className="bg-inherit outline-none border-b-2 border-gray-300 py-1"
    placeholder="Email"
   />
   <input
    type="text"
    onChange={inputsHandler}
    name="firstName"
    value={authData.firstName}
    className="bg-inherit outline-none border-b-2 border-gray-300 py-1"
    placeholder="First name"
   />
   <input
    type="text"
    onChange={inputsHandler}
    name="lastName"
    value={authData.lastName}
    className="bg-inherit outline-none border-b-2 border-gray-300 py-1"
    placeholder="Last name"
   />
   <input
    type="text"
    onChange={inputsHandler}
    name="password"
    value={authData.password}
    className="bg-inherit outline-none border-b-2 border-gray-300 py-1"
    placeholder="Password"
   />
   <input
    type="text"
    onChange={inputsHandler}
    name="confirmPassword"
    value={authData.confirmPassword}
    className="bg-inherit outline-none border-b-2 border-gray-300 py-1"
    placeholder="Confirm password"
   />
  </>
 );
};

export default AuthRegister;
