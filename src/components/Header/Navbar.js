import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Dropdown, initTWE } from "tw-elements";
import Container from "../container/Container.js";
import { PiSquaresFourLight } from "react-icons/pi";


function Navbar() {
  initTWE({ Collapse, Dropdown });
  const loginStatus = Boolean(localStorage.getItem("status"));
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("status");
    navigate('/login');
  };


  const [isGroceryHovered, setGroceryHovered] = useState(false);
  const [isClothingHovered, setClothingHovered] = useState(false);
  const [isShoesHovered, setShoesHovered] = useState(false);
  const [iselectronicsHovered, setelectronicsHovered] = useState(false);
  const [isBeautyHovered, setBeautyHovered] = useState(false);
  const [isBabyHovered, setBabyHovered] = useState(false);
  const [isAutoServiceHovered, setAutoServiceHovered] = useState(false);
  const [isPharmacyHovered, setPharmacyHovered] = useState(false);




 
  return (
    <header className="shadow ">
      <Container>
        <nav className="flex justify-between items-centerpy-2 shadow-dark-mild dark:bg-neutral-700 dark:text-neutral-200">
          <div className="flex-grow">
            <a className="flex items-center text-neutral-900 hover:text-neutral-900 dark:text-neutral-200" href="#">
              <span className="text-lg font-bold"></span>
            </a>
            <ul className="list-style-none flex space-x-4">
              {/* Departments Dropdown */}
              <li className="relative group">
               
                  <button
                  className="flex items-center rounded-full border-2 border-transparent text-royal-blue font-bold hover:border-gray-300 hover:bg-blue-200 transition duration-200 dark:text-white/60 dark:hover:bg-neutral-700 px-4 py-2"
                  aria-expanded="false"
                  onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle("hidden")}
                >
                  <PiSquaresFourLight className="mr-2" size={20} />
                  <span className="text-royal-blue font-bold">Departments</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                <ul className="absolute left-0 z-10 hidden min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800 group-hover:block">
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/grocery"
                      onMouseEnter={() => setGroceryHovered(true)}
                      onMouseLeave={() => setGroceryHovered(false)}
                    >
                      Grocery
                    </Link>
                    {isGroceryHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">Fresh Produce</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/grocery/everyday-meals">Everyday Meals</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/grocery/fresh-vegetables">Fresh Vegetables</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/grocery/flowers">Flowers</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/grocery/breads">Breads</Link></li>
                      </ul>
                    )}
                  </li>
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/clothing"
                      onMouseEnter={() => setClothingHovered(true)}
                      onMouseLeave={() => setClothingHovered(false)}
                    >
                      Clothing
                    </Link>
                    {isClothingHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2"> New Arrivals</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/clothing/womens">Women's Clothing</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/clothing/mens">Men's Clothing</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/clothing/kids">Kids Wear</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/clothing/party">Party Wear</Link></li>
                      </ul>
                    )}
                  </li>
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/shoes"
                      onMouseEnter={() => setShoesHovered(true)}
                      onMouseLeave={() => setShoesHovered(false)}
                    >
                      Shoes & Accessories
                    </Link>
                    {isShoesHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">Men's Collections</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/shoes/formal">Formal Shoes</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/shoes/casual">Casual Shoes</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/shoes/sports">Sports Shoes</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/shoes/sandals">Sandals</Link></li>
                        <li className="font-bold px-4 py-2">Accessories</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/accessories/socks">Socks</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/accessories/shoes-polish">Shoes Polish</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/accessories/perfume">Perfume</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/accessories/belt">Belt</Link></li>
                      </ul>
                    )}
                  </li>


                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/electronics"
                      onMouseEnter={() => setelectronicsHovered(true)}
                      onMouseLeave={() => setelectronicsHovered(false)}
                    >
                      Electronics & Video Games
                    </Link>
                    {iselectronicsHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">New & Trending</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/electronics/TV & Home Theatre">TV & Home Theatre</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/electronics/Laptops">Laptops</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/electronics/Mobile Phones">Mobile Phones</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/electronics/Watches">Watches</Link></li>
                        <li className="font-bold px-4 py-2">Smart Home</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/SmartHome/Fridge">Fridge</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/SmartHome/Washing Machine">Washing Machine</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/SmartHome/Vacuum Cleaners">Vacuum Cleaners</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/SmartHome/Dish Washer">Dish Washer</Link></li>
                      </ul>
                    )}
                  </li>
                 
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/Beauty"
                      onMouseEnter={() => setBeautyHovered(true)}
                      onMouseLeave={() => setBeautyHovered(false)}
                    >
                      Beauty & Make Up
                    </Link>
                    {isBeautyHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">Womens's Collections</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Beauty/MakeUp">Make Up</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Beauty/PedicureProducts">Pedicure Products</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Beauty/MenicureProducts">Menicure Products</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Beauty/FaceCare">Face care</Link></li>
                        <li className="font-bold px-4 py-2">Mens's Collections</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/MensCollections/socks">Face Wash cream</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/MensCollections/shoes-polish">Scented Perfumes</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/MensCollections/perfume">Pedicure Products</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/MensCollections/belt">Accessories</Link></li>
                      </ul>
                    )}
                  </li>
                 
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/Baby"
                      onMouseEnter={() => setBabyHovered(true)}
                      onMouseLeave={() => setBabyHovered(false)}
                    >
                      Baby Care & Kids Toys
                    </Link>
                    {isBabyHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">Baby care</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Baby/BabyCream">Baby Cream</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Baby/Baby Strollers">Baby Strollers</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Baby/Baby Pampers">Baby Pampers</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Baby/Bagpack">Bagpack</Link></li>
                        <li className="font-bold px-4 py-2">Kids Toys</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Kids/Scooters">Scooters & Ride Ons</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Kids/StuffedAnimals">Stuffed Animals & Plush</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Kids/Dolls">Dolls & Dollhouses</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Kids/ArtsandCraftsForKids">Arts & Crafts for Kids</Link></li>
                      </ul>
                    )}
                  </li>
                </ul>
              </li>


              {/* Services Dropdown */}
              <ul className="absolute left-0 z-10 hidden min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800 group-hover:block"></ul>
              <li className="relative group">
               


                <button
                  className="flex items-center rounded-full border-2 border-transparent text-royal-blue font-bold hover:border-gray-300 hover:bg-blue-200 transition duration-200 dark:text-white/60 dark:hover:bg-neutral-700 px-4 py-2"
                  aria-expanded="false"
                  onClick={(e) => e.currentTarget.nextElementSibling.classList.toggle("hidden")}
                >
                  <PiSquaresFourLight className="mr-2" size={20} />
                  <span className="text-royal-blue font-bold">Services</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </button>
                <ul className="absolute left-0 z-10 hidden min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800 group-hover:block">
                <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/AutoService"
                      onMouseEnter={() => setAutoServiceHovered(true)}
                      onMouseLeave={() => setAutoServiceHovered(false)}
                    >
                      Auto Care Services
                    </Link>
                    {isAutoServiceHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">All Auto Services</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/AutoService/Auto-Care-Center">Auto Care Center Services</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/AutoService/Buy-Tires-Schedule-Installation">Buy Tires & Schedule Installation</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/AutoService/Schedule-an-Oil-Change">Schedule an Oil Change</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/AutoService/Virtual-Garage">Virtual Garage</Link></li>
                      </ul>
                    )}
                  </li>


                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/Pharmacy"
                      onMouseEnter={() => setPharmacyHovered(true)}
                      onMouseLeave={() => setPharmacyHovered(false)}
                    >
                      Pharmacy
                    </Link>
                    {isPharmacyHovered && (
                      <ul className="absolute left-full top-0 z-20 min-w-max list-none rounded bg-white shadow-lg dark:bg-neutral-800">
                        <li className="font-bold px-4 py-2">New Arrivals</li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Pharmacy/Health-Services">Health Services</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Pharmacy/Pet-Pharmacy">Pet Pharmacy</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Pharmacy/All-Vaccines">All Vaccines</Link></li>
                        <li><Link className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700" to="/Pharmacy/Refill-Prescriptions">Refill Prescriptions</Link></li>
                      </ul>
                    )}
                  </li>
             
                </ul>
              </li>
             


              {/* Divider */}
              <li className="border-l border-gray-300 mx-2"></li>


         


{/* <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700"
                      to="/grocery"
                     
                    >
                      Grocery
                    </Link>
                 
                  </li> */}


<li className="relative group">
  <Link
    className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
    to="/grocery"
  >
    Grocery
  </Link>
</li>




                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
                      to="/clothing"
                     
                    >
                      Clothing
                    </Link>
                 
                  </li>
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
                      to="/shoes"
                 
                    >
                      Shoes & Accessories
                    </Link>
                 
                  </li>


                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
                      to="/electronics"
                 
                    >
                      Electronics & Video Games
                    </Link>
                 
                  </li>
                 
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
                      to="/Beauty"
               
                    >
                      Beauty & Make Up
                    </Link>
               
                  </li>


                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
                      to="/Baby"
                   
                    >
                      Baby Care & Kids Toys
                    </Link>
                 
                  </li>
             
                  <li className="relative group">
                    <Link
                      className="block px-4 py-2 text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-700 hover:underline"
                      to="/walmart+"
               
                    >
                      Walmart+
                    </Link>
                 
                  </li>
             
            </ul>
          </div>


         
        </nav>
      </Container>
    </header>
  );
}


export default Navbar;



