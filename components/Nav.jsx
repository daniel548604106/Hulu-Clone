import request from '../utils/requests';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="scrollbar-hide flex overflow-x-scroll  px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h1
            key={key}
            onClick={() => router.push(`?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h1>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-10  w-1/12 bg-gradient-to-l from-[#06202A]"></div>
    </nav>
  );
};

export default Nav;
