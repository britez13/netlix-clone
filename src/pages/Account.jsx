import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/b321426e-35ae-4661-b899-d63bca17648a/27a794b2-4d01-4b86-b31b-2bf7aedd1a57/PY-en-20220926-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='netflix background image'
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:py-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Movies</h1>
        </div>
      </div>
      <SavedMovies />
    </>
  );
};

export default Account;
