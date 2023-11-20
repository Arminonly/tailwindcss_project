import './App.css';
import img1 from './img/1.jpg';
import img2 from './img/3.webp';
import img3 from './img/4.jpg';
import img4 from './img/2.jpg';
import img5 from './img/5.webp';
import img11 from './img/users/11.jpg';
import img0 from './img/users/0.jpg';

function App() {
  return (
    //! body
    <div className="max-w-screen-xl mx-auto">
      {/* header */}
      <header className="px-2 border-b flex items-center justify-between h-14">
        <a
          className=" dark:text-purple-500 uppercase font-bold text-purple-800  "
          href="#"
        >
          TailwindCss
        </a>
        <nav className=" hidden md:inline-flex items-center">
          <ul className=" inline-flex items-center ">
            <li>
              <a className=" header-link" href="#">
                Home
              </a>
            </li>
            <li>
              <a className=" header-link " href="#">
                About
              </a>
            </li>
            <li>
              <a className=" header-link " href="#">
                Contact
              </a>
            </li>
          </ul>
          <ul className="inline-flex items-center">
            <li>
              <button className="header-btn  ">Login</button>
            </li>
            <li>
              <button className="header-btn">Register</button>
            </li>
          </ul>
        </nav>
        <button className="inline-block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      {/* breadcrumb */}
      <div className="px-2 flex items-center">
        <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center ">
          <a
            className="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </a>
          <span className="mx-2 text-gray-300 ">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <a
            className=" dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
            href="#"
          >
            News
          </a>
          <span className="mx-2 text-gray-300">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>

          <a
            className="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
            href="#"
          >
            Tech
          </a>
        </div>
      </div>

      {/* banners */}
      <section className="px-2 lg:flex lg:space-x-2">
        <a
          className="w-full  lg:w-2/3 bg-gradient-to-tr bg-purple-300   h-96 mb-4 relative rounded inline-block overflow-hidden"
          href="#"
        >
          <div className="absolute t-0 l-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70 "></div>
          <img
            className="absolute t-0 l-0 w-full h-full z-0 object-cover"
            src={img1}
            alt=""
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Lorem ipsum dolor sit amet consectetur.
            </h2>

            <span className="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2">
              React
            </span>
            <div className="flex mt-3">
              <img
                className="w-10 h-10 rounded-full mr-2 object-cover"
                src={img11}
                alt=""
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm ">Jane Doe</p>
                <time className="text-gray-400 text-xs">14 March</time>
              </div>
            </div>
          </div>
        </a>
        <a
          className=" w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
          href="#"
        >
          <div className="absolute t-0 l-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70 "></div>
          <img
            className="absolute t-0 l-0 w-full h-full z-0 object-cover"
            src={img2}
            alt=""
          />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h2>
            <span className="bg-gradient-to-bl from-blue-600 to-indigo-600 text-white inline-flex items-center justify-center px-4 py-1 mb-2">
              Angular
            </span>
            <div className="flex mt-3">
              <img
                className="w-10 h-10 rounded-full mr-2 object-cover"
                src={img0}
                alt=""
              />
              <div>
                <p className="font-semibold text-gray-200 text-sm">Jane Doe</p>
                <time className="text-gray-400 text-xs">14 March</time>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* main */}
      <main className="lg:flex">
        <div className=" w-full lg:w-2/3">
          {/* post cards */}
          <section className="px-2 ">
            <a className="block w-full lg:flex mb-10 " href="#">
              <img
                className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                src={img3}
                alt=""
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="dark:text-white mb-2 text-gray-700 font-bold text-2xl ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </h3>
                  <p className="text-gray-700 dark:text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt molestias numquam doloribus eligendi fugit quos a,
                    voluptate quam voluptatem laboriosam, placeat tempore sit
                    quaerat. Dolorem omnis aut voluptatem et quaerat!
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    className="w-10 h-10 rounded-full mr-2 object-cover"
                    src={img11}
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Jane Doe
                    </p>
                    <time className="text-gray-400 text-xs">14 March</time>
                  </div>
                </div>
              </div>
            </a>
            <a className="block w-full lg:flex mb-10 " href="#">
              <img
                className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                src={img4}
                alt=""
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="dark:text-white  mb-2 text-gray-700 font-bold text-2xl ">
                    Proin lobortis dolor sed velit posuere venenatis.
                  </h3>
                  <p className="text-gray-700 dark:text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt molestias numquam doloribus eligendi fugit quos a,
                    voluptate quam voluptatem laboriosam, placeat tempore sit
                    quaerat. Dolorem omnis aut voluptatem et quaerat!
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    className="w-10 h-10 rounded-full mr-2 object-cover"
                    src={img11}
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Jane Doe
                    </p>
                    <time className="text-gray-400 text-xs">14 March</time>
                  </div>
                </div>
              </div>
            </a>
            <a className="block w-full lg:flex mb-10 " href="#">
              <img
                className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                src={img5}
                alt=""
              />
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="dark:text-white  mb-2 text-gray-700 font-bold text-2xl ">
                    In nec neque ut sem ultricies pretium vitae vitae libero.
                  </h3>
                  <p className="text-gray-700 dark:text-slate-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt molestias numquam doloribus eligendi fugit quos a,
                    voluptate quam voluptatem laboriosam, placeat tempore sit
                    quaerat. Dolorem omnis aut voluptatem et quaerat!
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    className="w-10 h-10 rounded-full mr-2 object-cover"
                    src={img11}
                    alt=""
                  />
                  <div>
                    <p className="font-semibold text-gray-400 text-sm">
                      Jane Doe
                    </p>
                    <time className="text-gray-400 text-xs">14 March</time>
                  </div>
                </div>
              </div>
            </a>
          </section>

          {/* Pagination */}
          <div className="mt-20 mb-10">
            <ul className="flex justify-center">
              <li>
                <a className="pagination-items rounded-l-lg" href="#">
                  Previous
                </a>
              </li>
              <li>
                <a className="pagination-items" href="#">
                  1
                </a>
              </li>
              <li>
                <a className="pagination-items" href="#">
                  2
                </a>
              </li>
              <li>
                <a
                  className="pagination-items text-blue-600  hover:bg-blue-100  hover:text-blue-600 transition-all duration-300"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a className="pagination-items" href="#">
                  4
                </a>
              </li>
              <li>
                <a className="pagination-items" href="#">
                  5
                </a>
              </li>
              <li>
                <a className="pagination-items rounded-r-lg " href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/3 px-2 md:flex mf:space-x-6 lg:block lg:space-x-0">
          {/* topics */}
          <div className="w-full md:w-1/2 lg:w-full mb-5">
            <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">
              Popular News
            </h5>
            <ul>
              <li className=" dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white  hover:border-gray-200 transition-all duration-300">
                <a
                  className="dark:text-slate-400 flex items-center text-gray-600"
                  href="#"
                >
                  <span className=" inline-block bg-black w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"></span>
                  Vue
                  <span className=" text-gray-500 ml-auto dark:text-slate-400">
                    23 articles
                  </span>
                </a>
              </li>
              <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white  hover:border-gray-200 transition-all duration-300">
                <a
                  className="dark:text-slate-400 flex items-center text-gray-600"
                  href="#"
                >
                  <span className=" inline-block bg-black w-4 h-4 mr-3  bg-gradient-to-tr from-orange-500 to-orange-700"></span>
                  Svelte
                  <span className="text-gray-500 ml-auto dark:text-slate-400">
                    20 articles
                  </span>
                </a>
              </li>
              <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white  hover:border-gray-200 transition-all duration-300">
                <a
                  className="dark:text-slate-400 flex items-center text-gray-600"
                  href="#"
                >
                  <span className=" inline-block bg-black w-4 h-4 mr-3  bg-gradient-to-tr from-red-500 to-red-700"></span>
                  Angular
                  <span className="text-gray-500 ml-auto dark:text-slate-400">
                    7 articles
                  </span>
                </a>
              </li>
              <li className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white  hover:border-gray-200 transition-all duration-300">
                <a
                  className="dark:text-slate-400 flex items-center text-gray-600"
                  href="#"
                >
                  <span className=" inline-block bg-black w-4 h-4 mr-3  bg-gradient-to-tr from-blue-500 to-blue-700"></span>
                  React
                  <span className="text-gray-500 ml-auto dark:text-slate-400">
                    3 articles
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 lg:w-full ">
            {/* Divider */}
            <div className="border border-dotted md:hidden lg:block "></div>
            {/* subscribe */}
            <div className=" dark:text-slate-400 my-5  md:my-0 lg:my-5">
              <h5 className="dark:text-slate-400 font-bold text-lg uppercase text-gray-700 mb-2">
                Subscribe
              </h5>
              <p className="text-gray-6`00 mb-4">Subscribe to our newsletter</p>
              <input
                type="email"
                placeholder="your email address"
                className="text-gray-700 bg-gray-100 p-2 w-full border 
    rounded-t hover:border-gray-600 "
              />
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full first-letter:  hover:bg-indigo-800 transition-all duration-300">
                Subscribe
              </button>
            </div>
            {/* Divider */}
            <div className="border border-dotted md:hidden lg:block "></div>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer className="border-t mt-10 py-10 px-2">
        <div className=" md:flex">
          <div className="  w:full mb-5 md:w-2/5">
            <h6 className="dark:text-white  font-semibold text-gray-700 mb-3">
              Company
            </h6>
            <ul>
              <li>
                <a className="footer-link " href="#">
                  Team
                </a>
              </li>
              <li>
                <a className="footer-link " href="#">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w:full md:w-2/5">
            <h6 className=" dark:text-white  font-semibold text-gray-700 mb-3">
              Content
            </h6>
            <ul>
              <li>
                <a className="footer-link " href="#">
                  Block
                </a>
              </li>
              <li>
                <a className="footer-link  " href="#">
                  Policy
                </a>
              </li>
              <li>
                <a className="footer-link " href="#">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div className="w:full md:w-1/5">
            <h6 className="dark:text-white  font-semibold text-gray-700 mb-3">
              Contact Us
            </h6>
            <ul className="flex">
              <li className="mr-2">
                <a className="footer-link " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                </a>
              </li>
              <li className="mr-2">
                <a className="footer-link  " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="footer-link " href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
