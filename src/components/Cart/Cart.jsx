import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { RemoveItemAction } from '../../Redux/Actions/RemoveItem.Action';
import EmptyCart from "./EmptyCart";

const Cart = () => {
    const { product } = useSelector(state => state.AddToCart);
    console.log(product);
    const dispatch = useDispatch()
    return (
        <>

            <div className='md:mx-10'>
                {
                    product.length === 0 ? <EmptyCart /> :
                        product && product.map((data) => {
                            const { id, title, image, price, quantity } = data;
                            return (
                                <div key={id} className='md:w-full w-auto md:h-36 border border-blue-500 md:flex justify-between items-center mx-2'>
                                    <img src={image} className='w-32 h-32 mx-auto border border-red-600 md:mx-2' alt="" />
                                    <p className='p-3 md:p-0 mx-auto md:mx-0'>{title}</p>
                                    <div className='flex justify-center items-center border border-gray-300 p-1 space-x-1'>
                                        <p className='border border-gray-300 px-1 cursor-default'>{quantity}</p>
                                    </div>
                                    <div className="price border text-center  border-gray-300 text-blue-400 px-5 cursor-default">
                                        $ {price}
                                    </div>
                                    <div className="delete flex items-center justify-center md:justify-end mx-5">
                                        <AiOutlineDelete color='red' className='cursor-pointer md:text-2xl' onClick={() => { dispatch(RemoveItemAction(id)) }} />
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </>
    )
}

export default Cart