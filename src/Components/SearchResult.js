import { HeartIcon, StarIcon } from '@heroicons/react/solid';
import React from 'react';


export const SearchResult = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
    return (
        <div className='flex py-5 px-2 mt-5 border-b hover:shadow-lg hover:opacity-80 cursor-pointer 
        first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <img src={img} alt="" className='rounded-md h-full w-full'/>
               
            </div>

            <div className='flex flex-col flex-grow pl-5'> 
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer' />
                </div>
                <h3 className='text-xl'>{title}</h3>


                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
                
                <div className="flex justify-between items-end pt-5">
                    <div className="flex items-center">
                        <StarIcon className='h-5 text-red-400' />
                        {star}
                    </div>
                    <div>
                        <h2 className='text-lg lg:text-2xl font-semibold pb-2'>{price}</h2>
                        <p className='text-right text-extralight'>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

