"use client"
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {
    mobileDevelop,
    websiteDevelop,
    cms
} from '../constant/index'
import Image from 'next/image';

const DATA = [
    {
        key: 1,
        url: mobileDevelop,
        title: 'Mobile Development',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, suscipit in! Velit quasi sequi vel assumenda ex atque iusto.'
    },
    {
        key: 2,
        url: websiteDevelop,
        title: 'Website Development',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, suscipit in! Velit quasi sequi vel assumenda ex atque iusto.'
    },
    {
        key: 3,
        url: cms,
        title: 'CMS Development',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, suscipit in! Velit quasi sequi vel assumenda ex atque iusto.'
    },
]

const SliderCompo = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
        appendDots: (dots: any) => (
            <div className='bg-white w-2 h-1'>
                <ul>{dots}</ul>
            </div>
        ),
        customPaging: (i: any) => (
            <div className='bg-white w-4 h-[2px] mt-10' />
        )
    }

    return (
        <Slider {...settings}>
            {DATA && DATA?.map((items) => (

                <div className='w-full' key={items.key}>
                    <div className='flex flex-col items-center space-y-20'>
                        <Image
                            src={items.url}
                            alt='Image'
                            width={500}
                            height={500}
                            className='w-80 h-80 rounded-3xl'
                        />
                        <div className='flex flex-col space-y-3'>
                            <p className='text-slate-100 font-medium text-xl text-center'>{items.title}</p>
                            <p className='text-sm text-slate-200 text-center px-10'>{items.subtitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default SliderCompo