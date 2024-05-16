import React from 'react'
import { twMerge } from 'tailwind-merge'
interface Props {
    label?: string;
    className?: string
}
const DividerWithLabel = ({ label, className }: Props) => {
    return (
        <div className={twMerge('', className)}>
            <div
                className='w-full h-[1px] bg-slate-100 relative'
            >
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-400 px-2 bg-white font-light text-sm'>{label}</p>
            </div>
        </div>
    )
}

export default DividerWithLabel