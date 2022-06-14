import React from 'react'
import { Fade } from 'react-reveal'
import { LargeCard } from './LargeCard'

export const OutsideDoors = () => {
    let data = [
        {
            image: 'about.webp',
            buttonText: ' Get inspired',
            description: 'Wishlist curated by Airbnb',
            title: 'The Greatest Outdoors'
        }
    ]
    return (
        <div className='mx-8 sm:mx-16'>
            <Fade left>
            <div className=''>
                {data.map(card => <LargeCard title={card.title} image={card.image} description={card.description} buttonText={card.buttonText}/>)}
            </div>
            </Fade>

        </div>
    )
}
