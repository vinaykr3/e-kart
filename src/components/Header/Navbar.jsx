/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { CloseMenuAction } from '../../Redux/Actions/CloseMenu.Action';

const Navbar = () => {
    const navbar = useSelector(state => state.navbar);
    const dispatch = useDispatch()
    return (
        <>
            <div className={` absolute top-0 right-0 xl:static bg-green-300 xl:bg-white pt-14 xl:pt-0 w-72 xl:w-auto h-full xl:h-auto ${navbar} xl:translate-x-0 pr-4 transition-all`}>
                <h1 className="text-xl absolute top-3 right-2 font-bold xl:hidden cursor-pointer flex items-center" onClick={() => { dispatch(CloseMenuAction()) }}> <FaLongArrowAltLeft /> <span> BACK NAVBAR</span> </h1>
                <hr className='xl:hidden' />
                <ul className='flex flex-col pt-1 xl:pt-0 pl-4 space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4 xl:font-bold bg-green-300 xl:bg-transparent -mr-4 xl:mr-0 h-auto'>
                    <li>
                        <Link to="/" className='text-xl xl:text-2xl font-bold font-mono'>HOME</Link>
                    </li>
                    <li>
                        <Link to="/" className='text-xl xl:text-2xl font-bold font-mono'>SHOP</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;