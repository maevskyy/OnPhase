const AuthLogin = ({ inputsHandler, authData }) => {
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
        name="password"
        value={authData.password}
        className="bg-inherit outline-none border-b-2 border-gray-300 py-1"
        placeholder="Password"
      />
    </>
  );
};

export default AuthLogin;
