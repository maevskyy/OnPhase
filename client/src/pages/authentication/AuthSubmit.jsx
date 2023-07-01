import React from 'react';

const AuthSubmit = ({signIn, authSubmitHandler}) => {
  return (
    <article className="mt-2">
      <button
        className="bg-[#5855D6]/20 text-[#5855D6] font-semibold text-[18px] w-full items-center justify-center py-1 rounded-md shadow-sm"
        onClick={authSubmitHandler}
      >
        {signIn ? 'Sign In' : 'Sign Up'}
      </button>
    </article>
  );
};

export default AuthSubmit;
