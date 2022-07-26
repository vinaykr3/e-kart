/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import { FaPeopleCarry, FaLongArrowAltLeft } from "react-icons/fa";


const EmptyCart = () => {
    return (
        <>
            <Link to="/">
                <div className='flex items-center mb-2'>
                    <FaLongArrowAltLeft />
                    <a> Go Home</a>
                </div>
            </Link>
            <div className='bg-slate-200 py-3 px-4 flex justify-center flex-col items-center'>
                <p className='text-green-400 md:text-2xl'>No Item yet here! Go Back and Add To Cart</p>
                <FaPeopleCarry className='text-9xl' />
            </div>
        </>
    )
}

export default EmptyCart