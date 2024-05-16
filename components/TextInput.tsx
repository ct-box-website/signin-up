import React from 'react'
import { twMerge } from 'tailwind-merge';
import { CiMail, CiLock } from "react-icons/ci";

type Props = {
    label?: string;
    placeholder?: string;
    type?: 'email' | 'password';
    className?: string
}

const TextInput = ({ label, placeholder, type, className }: Props) => {
    return (
        <div
            className={twMerge('w-full flex relative group', className)}
        >
            <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                {
                    type === 'email' ? <CiMail size={18} className='text-slate-400 group-hover:text-sky-300 transition-all duration-300 ease-linear' /> :
                        type === 'password' ? <CiLock size={18} className='text-slate-400 group-hover:text-sky-300 transition-all duration-300 ease-linear' /> : ''
                }
            </div>
            <input type={type} placeholder={placeholder}
                className='border border-slate-100 bg-slate-50 py-2.5 pl-9 rounded-md w-full outline-none text-slate-500 font-light placeholder:font-light placeholder:text-sm focus:border-sky-100 focus:shadow-md focus:shadow-sky-50 transition-all duration-300 ease-linear group-hover:placeholder:text-sky-300 placeholder:transition-all placeholder:duration-300 placeholder:ease-linear'
            />
        </div>
    )
}

export default TextInput