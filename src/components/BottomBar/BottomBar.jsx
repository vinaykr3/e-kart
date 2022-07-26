import React from 'react'
import Search from '../Search/Search'

const BottomBar = () => {
  return (
    <>
        <div className='bg-slate-800 w-full h-auto fixed bottom-0 py-2 text-white md:hidden'>
            <Search />
        </div>
    </>
  )
}

export default BottomBar