/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Loading from '../Loading';

const Home = () => {
    const [Data, setData] = useState([]);
    const [filter, setFilter] = useState(Data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const data = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                setData(await data.clone().json());
                setFilter(await data.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])


    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            loading ? <div className='md:flex mx-auto md:space-x-4 space-y-4 md:space-y-0'>
                                <Loading dispay="block" mx="auto" maxWidth="sm" imgHeight="h-72" imgWidth="w-60" titleHeight="h-10" desHeight="h-20" desWidth="w-auto" btnHeight="" btnWidth="" />
                                <Loading dispay="block" mx="auto" maxWidth="sm" imgHeight="h-72" imgWidth="w-60" titleHeight="h-10" desHeight="h-20" desWidth="w-auto" btnHeight="" btnWidth="" />
                                <Loading dispay="block" mx="auto" maxWidth="sm" imgHeight="h-72" imgWidth="w-60" titleHeight="h-10" desHeight="h-20" desWidth="w-auto" btnHeight="" btnWidth="" />
                                <Loading dispay="block" mx="auto" maxWidth="sm" imgHeight="h-72" imgWidth="w-60" titleHeight="h-10" desHeight="h-20" desWidth="w-auto" btnHeight="" btnWidth="" />
                            </div> :
                                filter && filter.map((data) => {
                                    const { id, image, category, title, price } = data;
                                    return (
                                        <div key={id} className="lg:w-1/4 md:w-1/2 p-4 w-1/2 border border-slate-300  my-2">
                                            <Link to={`/detailsPage/${id}`} className="border border-slate-300">

                                                <p className="block h-48 rounded overflow-hidden" key={id}>
                                                    <img alt="ecommerce" className="object-contain w-full mx-auto h-full block" src={image} />
                                                </p>
                                                <div className="mt-4">
                                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                                                    <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                                    <p className="mt-1">${price}</p>
                                                </div>

                                            </Link>
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;