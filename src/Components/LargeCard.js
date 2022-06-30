import React from 'react'

export const LargeCard = ( {title,image,description,buttonText} ) => {
    console.log(title,image,buttonText)
    return (
        <section className='relative py-16'>
            <div className="h-96 min-w-[300px] relative">
                <img src={`/images/${image}`} alt="" className="rounded-2xl h-full md:h-fit object-cover" />
            </div>
            <div className='top-32 absolute left-12'>
            <div className='font-[600] text-4xl mb-3 w-64'>
                {title}
                </div>
            <div>
                {description}
            </div>
            <button className='text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-2 hover:bg-white hover:text-black
             
            active:scale-105 '>
                {buttonText}
            </button>
            </div> 
        </section>
    );
}
