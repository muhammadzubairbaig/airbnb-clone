import React from 'react'
import { Zoom } from 'react-reveal';

export const SmallCard = (data) => {
    console.log(data)
    return (
        <Zoom>
            <div className="flex space-x-5 items-center mt-5 hover:bg-gray-100 rounded-md
          cursor-pointer transition transform duration-100 ease-out hover:scale-105">
                <img src={`/images/${data.data.image}`} alt="" className='h-12 rounded-md' />
                <div className=''>
                    <h6 className="font-semibold">{data.data.title}</h6>
                    <p className="text-gray-500">{data.data.description}</p>
                </div>
            </div>
        </Zoom>

    );
}
