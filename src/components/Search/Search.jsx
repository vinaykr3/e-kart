import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import CartIcon from "../Cart/CartIcon"
import Setting from '../Setting/Setting';

const Search = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className=''>
        <input type="text" className={`border border-blue-300 px-4 py-1 absolute -bottom-11 ${show ? 'bottom-11 !important' : '-bottom-11'} rounded-md text-gray-900 outline-none w-full  md:hidden transition-all`} placeholder="Search here something..." />
        <div className='md:w-11/12 mx-auto'>
          <input type="text" className={`border md:w-11/12 mx-auto border-blue-300 px-2 py-1 hidden md:block absolute top-9 xl:top-11 md:h-10 xl:h-14 rounded-md outline-none md:left-0 md:right-0 transition-all ${show ? 'translate-y-0' : '-translate-y-28'}`} placeholder="Search here something..." />
        </div>
      </div>
      <div className="search-seting-cart flex justify-between xl:order-2">
        <AiOutlineSearch className='text-3xl md:text-4xl cursor-pointer mx-4 md:mx-0' onClick={() => { setShow(true) }} />
        <Setting />
        <CartIcon />
      </div>
    </>
  )
}
export default Search;