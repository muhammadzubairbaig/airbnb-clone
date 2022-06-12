import React from 'react'

export const MediumCard = (data) => {
    console.log(data)
    return (
        <div className="mt-5 m-1
        cursor-pointer transition transform duration-300 ease-out hover:scale-105">
            <img src={`/images/${data.data.image}`} alt="" className="max-w-[15rem] rounded-md"/>
            <h6 className='font-[500] mt-3'>{data.data.title}</h6>
        </div>

    );
}
