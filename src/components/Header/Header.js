import React, {useState} from "react";
// import { MdClose, MdOutlineAddShoppingCart, MdOutlineMenu } from 'react-icons/md'
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import Container from "../container/Container.js";
import logo from "../../../src/Walmart_Spark.svg.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import axios from "axios";




function Header() {
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(false);
  initTWE({ Collapse, Dropdown });
  const loginStatus = Boolean(localStorage.getItem("status"))
  const navigate = useNavigate()
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: loginStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !loginStatus,
    },
    {
      name: "Register",
      slug: "/register",
      active: !loginStatus,
    },
    {
      name: "Product",
      slug: "/product",
      active: loginStatus,
    },
  ];

  const handleLogout = () => {
    console.log('handleLogout');
    localStorage.removeItem("token")
    localStorage.removeItem("status")
    localStorage.clear();
    navigate('/login')
    window.location.reload()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://dummyjson.com/products/search?q=${search}`).then((response) => {
      console.log(response.data)
      setSearchData(response.data.products)
    })
  }

  const handleSeachInput = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value);
  }

  return (
    <header className="shadow bg-blue-500 ">
      <Container>
        <nav className="flex-no-wrap relative flex w-full items-center justify-between  shadow-dark-mild  lg:flex-wrap lg:justify-start ">
          <div className="flex w-full items-center justify-between px-3 ">
            <button
              className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
              type="button"
              data-twe-collapse-init
              data-twe-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto flex "
              id="navbarSupportedContent1"
              data-twe-collapse-item
            >
              <a
                className="mb-4 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 sm:w-30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 0 hover:bg-blue-900 rounded-full sm:px-3 sm:py-2 sm:text-sm"
                href="/"
              >
                <img
                  src={logo}
                  style={{ height: "35px", width: "45px" }}
                  alt="Walmart"
                  loading="lazy"
                />
              </a>
              
              {loginStatus && 
              <>
              <div className="mx-1 relative flex items-center lg:w-1/2 h-14 rounded-full bg-blue-800 hover:bg-blue-900 ">
                <div className="flex items-center invisible lg:visible">
                  <img className="w-8 h-8 absolute start-3 top-3" src="https://i5.walmartimages.com/dfw/4ff9c6c9-fef1/k2-_02b30b40-3838-4956-a9e4-36420d28015f.v1.png" alt="car" />
                  <h3 className="text-slate-200 absolute start-14 top-1 font-bold">Pickup</h3>
                  <div className="flex items-center"><span className="text-slate-200 absolute start-14 top-6 text-sm">Sacramento Supercenter</span></div>
                </div>
                
              </div>
              <div className=" flex items-center  bg-white lg:w-3/4  rounded-full"><input className="w-full p-3.5 px-4 border-0 bg-transparent outline-none rounded text-navy-700" type="text" onChange={handleSeachInput} placeholder="Search everything at Walmart online and in store" />
              <button type="submit" onClick={handleSubmit} className="mr-3 p-2.5 text-sm font-medium text-white  rounded-full  focus:outline-none focus:ring-sky-800 dark:bg-sky-800 dark:hover:bg-sky-800 dark:focus:ring-sky-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button> 
              </div>
              </>
}
            
            </div>

              
              
            <div className={`relative flex items-center justify-between ${!loginStatus ? null : 'lg:w-1/4' }`}>
             
              {loginStatus && <button className=" w-18 hover:bg-blue-900 p-2 px-4 m-1 rounded-full invisible lg:visible text-sm">
              <div className="flex items-center ">
                  <IoIosHeartEmpty className="w-4 h-4 text-white font-bold mr-2 " />
                  <div>
                  <div className="text-md  text-slate-50 text-start">Reorder</div>
                  <div className="text-sm font-bold text-slate-50 ">My Items</div>
                  </div>
              </div> 
                
              </button>}
              {!loginStatus &&
              <>
              <button className=" w-18 hover:bg-blue-900 p-2 px-4 rounded-full invisible lg:visible">
              <div className="flex items-center">
              <CiUser className="w-5 h-5 text-white font-bold mr-1" />
              <div>
                <div className="text-md  text-slate-50  text-start">Sign In</div>
                <div className="text-sm font-bold text-slate-50 ">Account</div>
                </div>
                </div>
              </button> 

              <button className=" w-18 hover:bg-blue-900 p-2 px-4 rounded-full invisible lg:visible">
              <div className="flex items-center">
              <CiUser className="w-5 h-5 text-white font-bold mr-1" />
              <div>
                <div className="text-md  text-slate-50  text-start">Register</div>
                </div>
                </div>
              </button> 
</>
              }
              {loginStatus &&<a className="me-4 text-neutral-600 dark:text-white relative p-2" href="#" >
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                  </svg>
                </span>
                <div className="absolute rounded-full w-4 h-4 bg-red-500 text-white top-0 right-0 text-xs text-center">0</div>
              </a>}
                             
             

            {loginStatus && <div
                className="relative"
                data-twe-dropdown-ref
                data-twe-dropdown-alignment="end"
              >
                <a
                  className="flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                  href="#"
                  id="dropdownMenuButton2"
                  role="button"
                  data-twe-dropdown-toggle-ref
                  aria-expanded="false"
                >
                  <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    className="rounded-full"
                    style={{ height: "25px", width: "25px" }}
                    alt=""
                    loading="lazy"
                  />
                </a>
                <ul
                  className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark"
                  aria-labelledby="dropdownMenuButton2"
                  data-twe-dropdown-menu-ref
                >
                  
                  <li>
                    <a
                      className="block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal  hover:bg-sky-200/60 focus:bg-sky-200/60 focus:outline-none active:bg-sky-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25 bg-blue-700/100 text-blue-700"
                      href="#"
                      data-twe-dropdown-item-ref
                      onClick={handleLogout}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div> }
            </div>
            
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
