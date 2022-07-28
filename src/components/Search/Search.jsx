/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import CartIcon from "../Cart/CartIcon"
import Setting from '../Setting/Setting';
import { useDispatch } from 'react-redux';

const Search = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    dispatch({type: "SEARCH", payload: input});
  }, [input])
  

  const [show, setShow] = useState(false);
  return (
    <>
      <div className=''>
        <input type="text" onChange={handleSearch} value={input} className={`border border-blue-300 px-4 py-1 absolute md:left-0 md:top-0 -bottom-11 md:bottom-auto ${show ? 'bottom-11 !important md:top-1 xl:top-3' : '-bottom-11 md:-top-9 md:bottom-auto'} rounded-md text-gray-900 outline-none w-full  transition-all`} placeholder="Search here something..." />
      </div>
      <div className="search-seting-cart flex justify-between xl:order-2">
        <AiOutlineSearch className='text-3xl md:text-4xl cursor-pointer mx-4 md:mx-0' onClick={() => { !show ? setShow(true) : setShow(false) }} />
        <Setting />
        <CartIcon />
      </div>
    </>
  )
}
export default Search