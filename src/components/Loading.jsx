import React from 'react'

const Loading = ({dispay, smDispay, width, smMx, maxWidth, imgHeight, imgWidth, titleHeight, desHeight, desWidth, btnHeight, btnWidth}) => {
    return (
        <div className={`border border-blue-300 shadow rounded-md p-4  md:max-w-${maxWidth} w-${width} mx-auto`}>
            <div className={`animate-pulse md:${dispay} ${smDispay} space-x-4`}>
                <div className={`bg-slate-200 mx-${smMx}  ${imgHeight} ${imgWidth}`}></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className={`${titleHeight} bg-slate-200 rounded`}></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className={`${desHeight} ${desWidth} bg-slate-200 rounded col-span-2`}></div>
                        </div>
                        <div className={`${btnHeight} w-${btnWidth} bg-slate-200 rounded`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading