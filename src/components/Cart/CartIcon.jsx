import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartIcon = () => {
    return (
        <>
            <Link to='/cart'>
                <AiOutlineShoppingCart className='text-3xl md:text-4xl mx-4 md:mx-0' />
            </Link>

        </>
    )
}

export default CartIcon;