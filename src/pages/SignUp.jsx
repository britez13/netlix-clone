import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-full h-screen '>
        <img
          className='hidden sm:block w-full h-full absolute object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/27a794b2-4d01-4b86-b31b-2bf7aedd1a57/PY-en-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='netflix background image'
        />
        <div className='bg-black/60 fixed top-0 left-0 h-full w-full'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 bg-gray-700 rounded my-2'
                  type='email'
                  placeholder='Email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 bg-gray-700 rounded my-2'
                  type='password'
                  placeholder='Password'
                />
                <button className='bg-red-600 rounded py-3 my-6 font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-sm text-gray-400'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need some help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-300 mr-1'>
                    Already subscribe to Netflix?
                  </span>
                  <Link to='/login'>Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
