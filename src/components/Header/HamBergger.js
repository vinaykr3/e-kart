import React from 'react'

const HamBergger = ({bg}) => {
  return (
    <div className='flex flex-col '>
        <div className={`${bg} w-7 h-1 my-[2px]`}></div>
        <div className={`${bg} w-7 h-1 my-[2px]`}></div>
        <div className={`${bg} w-7 h-1 my-[2px]`}></div>
    </div>
  )
}

export default HamBergger;