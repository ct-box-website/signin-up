'use client'
import React from 'react'
import { facebook, google } from '@/constant/index'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
type Props = {
    label?: string;
    icon?: 'facebook' | 'google';
    href?: string
}
export const ButtonWithIcon = ({ label, icon, href }: Props) => {
    return (
        <button
            className='bg-slate-50 rounded-md border border-slate-100 flex items-center justify-center py-3 px-5 space-x-2 w-full'
        >
            <Image src={icon === 'facebook' ? facebook : icon === 'google' ? google : 'null.png'}
                alt='Icon'
                width={256}
                height={256}
                className='w-5 h-5'
            />
            <Link href={href!} className='text-slate-500'>{label}</Link>
        </button>
    )
}

export const Button = ({
    label,
    href
}: Props) => {

    const router = useRouter()

    return (
        <button className='transition-all duration-300 ease-linear active:scale-95 w-full flex items-center justify-center bg-sky-500 rounded-md' onClick={() => router.push(href!)}>
            <Link href={href!} className='py-2 text-white font-medium text-[16px]'>
                {label}
            </Link>
        </button>
    )
}
