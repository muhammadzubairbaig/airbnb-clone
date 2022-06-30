import React from 'react'
import { Slide } from 'react-reveal'
import BannerImg from '../assets/banner.webp'
function Banner() {
    return (
        <div className='relative'>
            <div className='absolute text-center w-full top-1/2 md:top-1/2'>
                <Slide top cascade>
                <div className='text-black text-lg sm:text-7xl font-[800]'>Go Near</div>
                </Slide>
                {/* <Slide bottom> */}
                <button className='primary-btn mt-1 md:mt-4'>Explore nearby stays</button>
                {/* </Slide> */}
            </div>
            <img alt='banner img' className="2xl:h-[700px] xl:h-[600px] md:h-[500px] 
            sm:h-[400px] h-[300px] w-full" src={BannerImg} 
            style={{animationName:'auto'}}/>
        </div>
    )
}

export default Banner