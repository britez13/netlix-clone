import axios from "axios";
import { useEffect, useState } from "react";

const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios.get(fetchURL).then((res) => setMovies(res.data.results));
  }, [fetchURL]);

  console.log(movies);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl py-4'>{title}</h2>
      <div className='relative flex items-center'>
        <div id={"slider"}>
          {movies?.map((item) => {
            return (
              <div
                key={item.id}
                className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative py-2'
              >
                <img
                  className='w-full h-auto block'
                  src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                  alt={item?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p>{item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
