import { FcGoogle } from 'react-icons/fc';


const AuthHeader = ({signIn, setSignIn}) => {
  return (
    <>
      <article>
        <h3 className="font-bold text-[25px] w-[12em]  tracking-wider text-[#5855D6]/80">
          {signIn ? 'Welcome back, Alina' : 'Create your account'}
        </h3>
        <p className="text-gray-600 flex gap-1">
          {signIn ? "Don't have an account?" : 'Have an account?'}
          <span
            onClick={() => setSignIn((prev) => !prev)}
            className="font-medium text-red-600 hover:cursor-pointer"
          >
            {signIn ? 'Sign up' : 'Log in now'}
          </span>
        </p>
      </article>
      <article>
        <a
          href="#"
          className="flex gap-2 border-2 items-center justify-center py-1 rounded-md shadow-sm"
        >
          <FcGoogle className="text-[25px]" />
          <span className=" tracking-wide">Google</span>
        </a>
      </article>
      <article className="flex gap-2  justify-center items-center">
        <div className="h-[3px] w-[50%] border-b-[1px] border-gray-300"></div>
        <p className="text-gray-400">or</p>
        <div className="h-[3px] w-[50%] border-b-[1px] border-gray-300"></div>
      </article>
    </>
  );
};

export default AuthHeader;
