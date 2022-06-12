import React from 'react'
import BannerImg from '../assets/banner.webp'
function Banner() {
    return (
        <div className='relative'>
            <div className='absolute text-center w-full top-1/3 md:top-1/2'>
                <div className='text-black text-lg sm:text-7xl font-[800]'>Go Near</div>
                <button className='primary-btn mt-1 md:mt-4'>Explore nearby stays</button>
            </div>
            <img alt='banner img' className="2xl:h-[700px] xl:h-[600px] md:h-[500px] sm:h-[400px] h-[200px] w-full" src={BannerImg} />
        </div>
    )
}

export default Banner